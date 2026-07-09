import { Suspense, useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import { Navbar } from '@/components/navigation/Navbar'
import { Footer } from '@/components/navigation/Footer'
import { CanvasBackground } from '@/components/common/CanvasBackground'
import { PageTransition } from '@/components/common/PageTransition'
import { DetailSkeleton } from '@/components/feedback/Skeleton'

export function PublicLayout() {
  const { pathname } = useLocation()
  const lenisRef = useRef<Lenis | null>(null)

  // Initialize Lenis smooth scroll once
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    })
    lenisRef.current = lenis

    let frameId = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    })

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // Reset scroll to top on every route change — through Lenis so its internal
  // scroll target stays in sync (a raw window.scrollTo desyncs Lenis and leaves
  // the viewport stranded in the empty space below a shorter page = black screen).
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true, force: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return (
    <div className="text-foreground selection:bg-primary-500/30 relative min-h-screen bg-black antialiased selection:text-white">
      {/* Dynamic Starfield Neural Canvas (Home page only) */}
      {pathname === '/' && <CanvasBackground />}

      {/* Global Header */}
      <Navbar />

      {/* Main Content Space with transition animation.
          Suspense sits ABOVE the animated layer so a lazy route suspending
          never interrupts the presence transition (which could blank the view). */}
      <main className="relative z-10 min-h-[calc(100vh-320px)] pt-24">
        <Suspense fallback={<DetailSkeleton />}>
          <PageTransition pathname={pathname}>
            <Outlet />
          </PageTransition>
        </Suspense>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}
export default PublicLayout
