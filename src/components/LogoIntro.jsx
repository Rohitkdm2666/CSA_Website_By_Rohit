import { useState, useEffect } from 'react'
import CSALogo from './CSALogo'

export default function LogoIntro({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true)
  const [animationPhase, setAnimationPhase] = useState('spin') // 'spin' -> 'grow' -> 'disappear'

  useEffect(() => {
    // Phase 1: Spin for 2 seconds
    const spinTimer = setTimeout(() => {
      setAnimationPhase('grow')
    }, 2000)

    // Phase 2: Grow and accelerate for 1.5 seconds
    const growTimer = setTimeout(() => {
      setAnimationPhase('disappear')
    }, 3500)

    // Phase 3: Disappear and show main content
    const disappearTimer = setTimeout(() => {
      setIsVisible(false)
      onComplete()
    }, 4500)

    return () => {
      clearTimeout(spinTimer)
      clearTimeout(growTimer)
      clearTimeout(disappearTimer)
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative">
        {/* CSA Logo Container */}
        <div 
          className={`
            transition-all duration-1000 ease-out transform-gpu
            ${animationPhase === 'spin' ? 'w-32 h-32 animate-spin-slow' : ''}
            ${animationPhase === 'grow' ? 'w-64 h-64 animate-spin-fast scale-150' : ''}
            ${animationPhase === 'disappear' ? 'w-96 h-96 animate-spin-fastest scale-300 opacity-0' : ''}
          `}
        >
          <CSALogo className="w-full h-full" />
        </div>

        {/* Glow Effect */}
        <div className={`
          absolute inset-0 rounded-full blur-xl transition-all duration-1000
          ${animationPhase === 'spin' ? 'bg-orange-500/30 scale-150' : ''}
          ${animationPhase === 'grow' ? 'bg-orange-400/50 scale-200' : ''}
          ${animationPhase === 'disappear' ? 'bg-orange-300/70 scale-400' : ''}
        `} />

      </div>
    </div>
  )
}
