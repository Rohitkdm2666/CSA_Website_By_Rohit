import { useState, useRef } from 'react'
import CSALogo from './CSALogo'

export default function InteractiveCSALogo({ className = "w-32 h-32" }) {
  const [isHovered, setIsHovered] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 })
  const logoRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!isHovered || !logoRef.current) return
    
    const rect = logoRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const rotateX = (e.clientY - centerY) / 3
    const rotateY = (e.clientX - centerX) / 3
    const rotateZ = ((e.clientX - centerX) + (e.clientY - centerY)) / 10
    
    setRotation({ x: rotateX, y: rotateY, z: rotateZ })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotation({ x: 0, y: 0, z: 0 })
  }

  return (
    <div className="flex items-center justify-center">
      <div
        ref={logoRef}
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Interactive Logo Container */}
        <div 
          className={`
            ${className} transition-all duration-300 ease-out transform-gpu perspective-1000
            ${isHovered ? 'scale-110' : 'scale-100'}
          `}
          style={{
            transform: `
              perspective(1000px) 
              rotateX(${rotation.x}deg) 
              rotateY(${rotation.y}deg) 
              rotateZ(${rotation.z}deg) 
              ${isHovered ? 'scale(1.1)' : 'scale(1)'}
            `,
            transformStyle: 'preserve-3d'
          }}
        >
          <CSALogo className="w-full h-full" interactive={true} />
        </div>

        {/* Hover Glow Effect */}
        <div className={`
          absolute inset-0 rounded-full blur-xl transition-all duration-300 pointer-events-none
          ${isHovered ? 'bg-orange-400/30 scale-125' : 'bg-orange-500/10 scale-100'}
        `} />

        {/* Interactive Particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-orange-400 rounded-full animate-ping"
                style={{
                  left: `${15 + i * 10}%`,
                  top: `${20 + (i % 3) * 30}%`,
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: '1.2s'
                }}
              />
            ))}
          </div>
        )}

        {/* Rotation Indicator */}
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-orange-300 whitespace-nowrap animate-fade-in">
            Move cursor to rotate • Click and drag
          </div>
        )}

        {/* 3D Depth Lines */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute inset-0 border border-orange-400/20 rounded-full transition-all duration-300"
              style={{
                transform: `translateZ(-10px) scale(0.95)`,
                transformStyle: 'preserve-3d'
              }}
            />
            <div 
              className="absolute inset-0 border border-orange-400/10 rounded-full transition-all duration-300"
              style={{
                transform: `translateZ(-20px) scale(0.9)`,
                transformStyle: 'preserve-3d'
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
