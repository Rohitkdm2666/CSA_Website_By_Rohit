import React from 'react';
import { EVENTS } from '../constants';

const SectionTitle = ({ children }) => (
  <h2 data-animate className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
    {children}
    <div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full neon-shadow"></div>
  </h2>
);

const EventCard = ({ event, delay }) => (
  <div
    data-animate
    style={{ animationDelay: `${delay}s` }}
    className="bg-black border border-gray-800 rounded-lg overflow-hidden group transition-all duration-300 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/10 transform hover:-translate-y-2"
  >
    <div className="overflow-hidden">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <p className="text-red-500 text-sm font-semibold mb-2">{event.date}</p>
      <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
      <p className="text-gray-400 leading-relaxed">{event.description}</p>
    </div>
  </div>
);

const Events = () => {
  return (
    <section id="events" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Events</SectionTitle>
        <p
          data-animate
          className="text-center max-w-3xl mx-auto text-gray-300 text-lg mt-8 mb-16"
        >
          Check out our exciting lineup of workshops, hackathons, and speaker sessions designed to ignite your passion for technology.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS.map((event, index) => (
            <EventCard key={event.title} event={event} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
