import React from 'react';
import { NAV_LINKS } from '../constants';

const SocialIcon = ({ href, children, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-400 hover:text-red-500 transition-all duration-300 transform hover:scale-125"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900/40 border-t border-red-500/20 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">CSA</h3>
            <p className="max-w-xs mx-auto md:mx-0">
              The Computer Student Association. A community of passionate student developers building solutions for a better future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={`footer-${link.name}`}>
                  <a href={link.href} className="hover:text-red-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Socials */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <SocialIcon href="#" label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.51-.93 8.354-4.32 9.67-1.734.54-3.56.34-5.106-.52-1.346-.76-2.433-1.9-3.16-3.25.082.02.164.03.246.04.688.08 1.36-.06 2.003-.34-1.12-.32-2.01-.93-2.54-1.92-.28-.52-.42-1.1-.4-1.68.35.2.71.32 1.09.34-.64-.46-1.1-1.13-1.28-1.9.0-1.04.5-1.97 1.24-2.72 1.25 1.52 2.95 2.62 4.85 3.08-.04-.23-.06-.46-.06-.7 0-1.14.59-2.2 1.52-2.75.83-.49 1.8-.56 2.71-.25.38-.08.75-.2 1.1-.38-.14.42-.42.77-.79 1.04.36-.04.71-.12 1.04-.28-.24.36-.52.68-.84.94z"/>
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Computer Student Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
