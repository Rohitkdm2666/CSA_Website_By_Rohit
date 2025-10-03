import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';

const SectionTitle = ({ children }) => (
  <h2 data-animate className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
    {children}
    <div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full neon-shadow"></div>
  </h2>
);

const AccordionItem = ({ item, isOpen, onClick, delay }) => {
  return (
    <div data-animate style={{ animationDelay: `${delay}s` }} className="border-b border-red-500/30">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <span className="text-xl font-medium text-white transition-colors hover:text-red-400">
          {item.question}
        </span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
      <div className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="pb-6 text-gray-300">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <div className="max-w-3xl mx-auto mt-16">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
