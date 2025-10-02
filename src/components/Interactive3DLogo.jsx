import { useState, useRef } from 'react'

export default function Interactive3DLogo() {
  const [isHovered, setIsHovered] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const logoRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!isHovered || !logoRef.current) return
    
    const rect = logoRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const rotateX = (e.clientY - centerY) / 5
    const rotateY = (e.clientX - centerX) / 5
    
    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotation({ x: 0, y: 0 })
  }

  return (
    <div className="flex items-center justify-center py-8">
      <div
        ref={logoRef}
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {/* 3D Logo Container */}
        <div 
          className={`
            w-24 h-24 transition-all duration-300 ease-out transform-gpu perspective-1000
            ${isHovered ? 'scale-125' : 'scale-100'}
          `}
          style={{
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovered ? 'scale(1.25)' : 'scale(1)'}`
          }}
        >
          {/* 3D Hexagon Logo */}
          <div className="relative w-full h-full">
            {/* Front Face */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg shadow-lg transform translate-z-2">
              <div className="absolute inset-2 border-2 border-orange-300 rounded-lg opacity-60" />
              <div className="absolute inset-4 bg-orange-200/20 rounded-md" />
            </div>
            
            {/* Back Face */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg shadow-md transform translate-z-[-8px] rotate-y-180">
              <div className="absolute inset-2 border-2 border-orange-400 rounded-lg opacity-40" />
            </div>
            
            {/* Top Face */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-orange-500 rounded-lg transform rotate-x-90 origin-top translate-z-2">
              <div className="absolute inset-2 border-2 border-orange-200 rounded-lg opacity-50" />
            </div>
            
            {/* Bottom Face */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-800 rounded-lg transform rotate-x-[-90deg] origin-bottom translate-z-2">
              <div className="absolute inset-2 border-2 border-orange-500 rounded-lg opacity-30" />
            </div>
            
            {/* Left Face */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-400 to-orange-600 rounded-lg transform rotate-y-[-90deg] origin-left translate-z-2">
              <div className="absolute inset-2 border-2 border-orange-300 rounded-lg opacity-45" />
            </div>
            
            {/* Right Face */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500 to-orange-700 rounded-lg transform rotate-y-90 origin-right translate-z-2">
              <div className="absolute inset-2 border-2 border-orange-400 rounded-lg opacity-35" />
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className={`
          absolute inset-0 rounded-full blur-lg transition-all duration-300 pointer-events-none
          ${isHovered ? 'bg-orange-400/40 scale-150' : 'bg-orange-500/20 scale-100'}
        `} />

        {/* Interactive Particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-orange-400 rounded-full animate-ping"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1s'
                }}
              />
            ))}
          </div>
        )}

        {/* Tooltip */}
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-orange-300 whitespace-nowrap animate-fade-in">
            Move your cursor to manipulate
          </div>
        )}
      </div>
    </div>
  )
}
