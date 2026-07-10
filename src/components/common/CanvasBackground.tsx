import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  bx: number
  by: number
  radius: number
  alpha: number
  color: string
}

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

    const colors = [
      'rgba(255, 255, 255, 0.45)', // All stars/nodes in white
    ]

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const w = canvas.width
      const h = canvas.height

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          bx: 0,
          by: 0,
          radius: Math.random() * 1.8 + 0.6,
          alpha: Math.random() * 0.5 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const w = canvas.width
      const h = canvas.height
      const mouse = mouseRef.current

      // Update and draw particles
      particles.forEach((p) => {
        // Move with base velocity and blast offset
        const bx = p.bx || 0
        const by = p.by || 0
        p.x += p.vx + bx
        p.y += p.vy + by

        // Friction on blast offset
        p.bx = bx * 0.92
        p.by = by * 0.92

        // Wrap around boundaries
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.shadowBlur = 4
        ctx.shadowColor = '#ffffff'
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
            // Draw connection line
            const alpha = (1 - dist / connectionDistance) * 0.12
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
            // Color connection towards mouse with brand teal/green
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
