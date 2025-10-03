import React from 'react';
import { DOMAINS } from '../constants';

const SectionTitle = ({ children }) => (
  <h2 data-animate className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
    {children}
    <div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full neon-shadow"></div>
  </h2>
);

const DomainCard = ({ domain, delay }) => (
  <div
    data-animate
    style={{ animationDelay: `${delay}s` }}
    className="bg-gray-900/50 border border-red-500/30 rounded-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_20px_theme('colors.red.500/0.3')] transform hover:-translate-y-2"
  >
    <div className="mb-6">{domain.icon}</div>
    <h3 className="text-2xl font-semibold text-white mb-3">{domain.name}</h3>
    <p className="text-gray-400 leading-relaxed">{domain.description}</p>
  </div>
);

const Domains = () => {
  return (
    <section id="domains" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Our Domains</SectionTitle>
        <p
          data-animate
          className="text-center max-w-3xl mx-auto text-gray-300 text-lg mt-8 mb-16"
        >
          We focus on a diverse range of cutting-edge technologies to equip our members
          with the skills needed for the future.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DOMAINS.map((domain, index) => (
            <DomainCard key={domain.name} domain={domain} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
