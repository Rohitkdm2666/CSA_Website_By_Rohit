import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const tagline = "Code. Create. Collaborate.";

  // On-load animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Mouse move parallax effect
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Helper function to apply parallax transformation
  const blobStyle = (factor) => ({
    transform: `translate(${mousePosition.x * factor}px, ${mousePosition.y * factor}px)`,
  });

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-circuit-board-and-data-processing-5353-large.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Animated Blobs with Parallax */}
      <div className="absolute inset-0 z-10 overflow-hidden" aria-hidden="true">
        <div
          style={blobStyle(30)}
          className="absolute w-72 h-72 bg-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob top-1/4 left-1/4 transition-transform duration-500 ease-out"
        ></div>
        <div
          style={blobStyle(-50)}
          className="absolute w-80 h-80 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob bottom-1/4 right-1/4 animation-delay-2000 transition-transform duration-500 ease-out"
        ></div>
        <div
          style={blobStyle(20)}
          className="absolute w-64 h-64 bg-red-800 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob bottom-10 left-20 animation-delay-4000 transition-transform duration-500 ease-out"
        ></div>
      </div>

      <div className="relative z-20 text-center flex flex-col items-center">
        {/* CSA Text Animation Container */}
        <div
          className={`csa-text-container transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
          <svg
            viewBox="0 0 900 350"
            className="w-[70vw] md:w-[60vw] max-w-6xl"
            aria-label="CSA"
          >
            <text
              className="csa-text"
              x="50%"
              y="50%"
              dy=".35em"
              textAnchor="middle"
            >
              CSA
            </text>
          </svg>
        </div>

        {/* Full Club Name */}
        <div className="overflow-hidden mt-4">
          <p
            className={`text-2xl md:text-4xl text-white font-bold tracking-widest animate-neon-pulse transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
            style={{ transitionDelay: '2.5s' }}
          >
            Computer Student Association
          </p>
        </div>

        {/* Tagline with letter flip animation */}
        <div
          className={`level-up-container mt-6 transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '3s' }}
        >
          {tagline.split('').map((letter, index) => (
            <span
              key={index}
              className="level-up-letter"
              style={{ animationDelay: `${3.2 + index * 0.08}s` }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>

        {/* Call to Action Button */}
        <div
          className={`mt-10 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '4s' }}
        >
          <button className="neon-button">
            Explore Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
