import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  /** Velocidade base de deriva (vaga pelo espaço). */
  vx: number
  vy: number
  /** Velocidade adquirida pela gravidade do logo. */
  gvx: number
  gvy: number
  /** Offset de explosão (clique no logo). */
  bx: number
  by: number
  radius: number
  alpha: number
  /** 0→1 fade-in após (re)nascer. */
  spawn: number
  /** Posição do frame anterior, para desenhar o rastro. */
  px: number
  py: number
}

/**
 * Fundo de partículas com gravidade real ao redor do logo (Navbar).
 *
 * O logo (.animated-logo-circle) atua como um buraco negro:
 * - partículas dentro do raio de influência são atraídas (aceleração radial);
 * - ganham componente tangencial e entram em órbita espiral;
 * - ao cruzar o horizonte de eventos são "sugadas" (encolhem e somem no centro)
 *   e renascem numa borda aleatória da tela.
 */
export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, active: false })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const particleCount = 60
    const connectionDistance = 120

    // --- Parâmetros da física gravitacional ---
    const INFLUENCE = 340 // raio de influência gravitacional (px)
    const GRAVITY = 0.16 // aceleração radial máxima (px/frame²)
    const SWIRL = 0.22 // aceleração tangencial máxima (orbita)
    const MAX_GRAV_SPEED = 4.2 // limite da velocidade adquirida
    const RESPAWN_ALPHA_SPEED = 0.02

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const spawnAtEdge = (p: Particle) => {
      const w = canvas.width
      const h = canvas.height
      const edge = Math.floor(Math.random() * 4)
      if (edge === 0) {
        p.x = Math.random() * w
        p.y = -6
      } else if (edge === 1) {
        p.x = w + 6
        p.y = Math.random() * h
      } else if (edge === 2) {
        p.x = Math.random() * w
        p.y = h + 6
      } else {
        p.x = -6
        p.y = Math.random() * h
      }
      p.vx = (Math.random() - 0.5) * 0.35
      p.vy = (Math.random() - 0.5) * 0.35
      p.gvx = 0
      p.gvy = 0
      p.bx = 0
      p.by = 0
      p.spawn = 0
      p.px = p.x
      p.py = p.y
    }

    const makeParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      gvx: 0,
      gvy: 0,
      bx: 0,
      by: 0,
      radius: Math.random() * 1.8 + 0.6,
      alpha: Math.random() * 0.5 + 0.3,
      spawn: 1,
      px: 0,
      py: 0,
    })

    const initParticles = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        const p = makeParticle()
        p.px = p.x
        p.py = p.y
        particles.push(p)
      }
    }

    /** Centro e raio do logo (buraco negro) em coordenadas de viewport. */
    let logoEl: Element | null = null
    let logoQueryCooldown = 0
    const getAttractor = () => {
      if (!logoEl || logoQueryCooldown <= 0) {
        logoEl = document.querySelector('.animated-logo-circle')
        logoQueryCooldown = 120 // re-consulta o DOM ~a cada 2s
      }
      logoQueryCooldown--
      if (!logoEl) return null
      const rect = logoEl.getBoundingClientRect()
      if (rect.width === 0) return null
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        core: Math.max(rect.width * 0.32, 16), // horizonte de eventos
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const w = canvas.width
      const h = canvas.height
      const mouse = mouseRef.current
      const attractor = getAttractor()

      particles.forEach((p) => {
        p.px = p.x
        p.py = p.y

        // --- Gravidade do logo ---
        let pull = 0 // 0..1, intensidade local da gravidade (para o visual)
        if (attractor) {
          const dx = attractor.x - p.x
          const dy = attractor.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy) || 0.001

          if (dist < INFLUENCE) {
            pull = 1 - dist / INFLUENCE
            const nx = dx / dist
            const ny = dy / dist

            // Aceleração radial (mais forte perto do centro).
            const ar = GRAVITY * pull * pull * 2.2
            // Aceleração tangencial — induz a órbita espiral (sentido fixo).
            const at = SWIRL * Math.pow(pull, 1.5)

            p.gvx += nx * ar + -ny * at
            p.gvy += ny * ar + nx * at

            // Limita a velocidade orbital para manter o movimento natural.
            const gs = Math.sqrt(p.gvx * p.gvx + p.gvy * p.gvy)
            if (gs > MAX_GRAV_SPEED) {
              p.gvx = (p.gvx / gs) * MAX_GRAV_SPEED
              p.gvy = (p.gvy / gs) * MAX_GRAV_SPEED
            }

            // Sugada pelo horizonte de eventos → renasce na borda.
            if (dist < attractor.core) {
              spawnAtEdge(p)
              return
            }
          } else {
            // Fora da influência a velocidade adquirida se dissipa.
            p.gvx *= 0.96
            p.gvy *= 0.96
          }
        }

        // Movimento: deriva + gravidade + explosão
        p.x += p.vx + p.gvx + p.bx
        p.y += p.vy + p.gvy + p.by

        // Atrito do impulso de explosão
        p.bx *= 0.92
        p.by *= 0.92

        // Fade-in após renascer
        if (p.spawn < 1) p.spawn = Math.min(1, p.spawn + RESPAWN_ALPHA_SPEED)

        // Wrap nas bordas (apenas quando não está em queda gravitacional)
        if (pull === 0) {
          if (p.x < -8) p.x = w + 8
          if (p.x > w + 8) p.x = -8
          if (p.y < -8) p.y = h + 8
          if (p.y > h + 8) p.y = -8
        }

        const alpha = p.alpha * p.spawn

        // Rastro: quanto mais rápido (sugado), mais longo o risco de luz.
        const speed = Math.sqrt(
          (p.x - p.px) * (p.x - p.px) + (p.y - p.py) * (p.y - p.py),
        )
        if (speed > 1.2 && pull > 0) {
          ctx.beginPath()
          ctx.moveTo(p.px, p.py)
          ctx.lineTo(p.x, p.y)
          ctx.strokeStyle = `rgba(62, 240, 170, ${Math.min(0.5, pull * alpha)})`
          ctx.lineWidth = p.radius * 0.8
          ctx.stroke()
        }

        // Partícula: branca no espaço livre, esverdeando perto do buraco negro.
        const r = Math.round(255 - (255 - 62) * pull)
        const g = Math.round(255 - (255 - 240) * pull)
        const b = Math.round(255 - (255 - 170) * pull)
        ctx.beginPath()
        // Encolhe levemente conforme se aproxima do horizonte.
        ctx.arc(p.x, p.y, p.radius * (1 - pull * 0.35), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`
        ctx.shadowBlur = 4 + pull * 6
        ctx.shadowColor = pull > 0.25 ? '#3EF0AA' : '#ffffff'
        ctx.fill()
      })

      // Reset shadow for performance in line drawings
      ctx.shadowBlur = 0

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]

          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            const alpha =
              (1 - dist / connectionDistance) * 0.12 * p1.spawn * p2.spawn
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      // Draw mouse interactions (nodes gravitate/link to mouse)
      if (mouse.active) {
        particles.forEach((p) => {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance * 1.5) {
            const alpha = (1 - dist / (connectionDistance * 1.5)) * 0.18
            ctx.beginPath()
            ctx.moveTo(mouse.x, mouse.y)
            ctx.lineTo(p.x, p.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()

            // Soft pull effect
            p.x += dx * 0.003
            p.y += dy * 0.003
          }
        })
      }

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    // Event listeners
    window.addEventListener('resize', resizeCanvas)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      mouseRef.current.active = true
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    const handleExplosion = (e: Event) => {
      const customEvent = e as CustomEvent<{ x: number; y: number }>
      const { x, y } = customEvent.detail

      // Push all particles away from (x,y)
      particles.forEach((p) => {
        const dx = p.x - x
        const dy = p.y - y
        const dist = Math.sqrt(dx * dx + dy * dy)

        // Blast radius
        if (dist < 1200) {
          const force = Math.pow((1200 - dist) / 1200, 2) // Exponential falloff for punchier center
          const angle = Math.atan2(dy, dx)
          // Add massive blast velocity
          p.bx = (p.bx || 0) + Math.cos(angle) * force * 150
          p.by = (p.by || 0) + Math.sin(angle) * force * 150
          // A explosão também zera a velocidade orbital adquirida.
          p.gvx = 0
          p.gvy = 0
        }
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('logoExplosion', handleExplosion)

    // Init
    resizeCanvas()
    drawParticles()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('logoExplosion', handleExplosion)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full bg-black"
    />
  )
}
