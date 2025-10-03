import React from 'react';

const SectionTitle = ({ children }) => (
  <h2 data-animate className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
    {children}
    <div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full neon-shadow"></div>
  </h2>
);

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Us</SectionTitle>
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div data-animate className="text-gray-300 text-lg leading-relaxed">
            <p className="mb-6">
              We are a passionate community of student developers dedicated to exploring the ever-evolving world of technology. Our mission is to foster a culture of learning, collaboration, and innovation within the college campus.
            </p>
            <p className="mb-6">
              Through hands-on workshops, expert-led seminars, and competitive hackathons, we provide a platform for students to enhance their technical skills, work on meaningful projects, and connect with peers and industry professionals.
            </p>
            <p>
              Whether you are a seasoned coder or just starting your tech journey, our club offers a supportive environment to help you achieve your goals and turn your ideas into reality.
            </p>
          </div>
          <div data-animate style={{ animationDelay: '0.2s' }} className="relative">
            <img
              src="https://picsum.photos/seed/about/800/600"
              alt="Team working on a project"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
            <div className="absolute -inset-2 border-2 border-red-500/50 rounded-lg -z-10 transform rotate-2 transition-transform duration-500 hover:rotate-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
