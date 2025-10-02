import { useEffect, useRef } from 'react'

export default function LiveStrip() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    let x = 0
    const tick = () => {
      x -= 0.5
      if (x <= -el.scrollWidth / 2) x = 0
      el.style.transform = `translateX(${x}px)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])
  const text = 'AI · Web · Systems · 3D · Open Source · Hackathons · '
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-black/40">
      <div className="container-xl py-3">
        <div className="relative whitespace-nowrap">
          <div ref={ref} className="inline-block will-change-transform">
            <span className="mx-4 text-sm text-white/70">{text.repeat(10)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}


