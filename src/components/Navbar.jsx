import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import CSALogo from './CSALogo';
// import Logo from '../assets/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const leftLinks = NAV_LINKS.slice(0, 2);
  const rightLinks = NAV_LINKS.slice(2);

  const handleToggle = () => {
    setIsAnimating(true);
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="relative flex items-center justify-center h-16">
        {/* Expanding Nav */}
        <nav
          className={`flex items-center justify-between h-16 bg-black/80 backdrop-blur-sm border border-red-500 rounded-full shadow-[0_0_20px_theme(colors.red.500/0.5)] transition-all duration-700 ease-in-out overflow-hidden ${
            isOpen ? 'w-full max-w-4xl px-8 opacity-100' : 'w-16 px-0 opacity-0 pointer-events-none'
          }`}
        >
          {/* Left Links */}
          <div className="flex items-center space-x-10">
            {leftLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Spacer for Logo */}
          <div className="w-16 shrink-0 mx-4"></div>

          {/* Right Links */}
          <div className="flex items-center space-x-10">
            {rightLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Clickable Logo */}
        <button
          onClick={handleToggle}
          onAnimationEnd={() => setIsAnimating(false)}
          className={`absolute z-10 w-16 h-16 bg-black rounded-full border-2 border-orange-500 flex items-center justify-center hover:border-orange-400 transition-colors ${
            isAnimating ? 'animate-[spin-once_0.7s_ease-in-out]' : ''
          }`}
        >
          <CSALogo className="w-8 h-8" />
        </button>
      </div>
    </header>
  );
};

export default Header;
