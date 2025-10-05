// /src/components/csa-footer.jsx

import {
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Linkedin,
} from 'lucide-react';
import React from 'react';

const data = {
  instagramLink: 'https://instagram.com/csa',
  twitterLink: 'https://twitter.com/csa',
  githubLink: 'https://github.com/csa',
  linkedinLink: 'https://linkedin.com/company/csa',
  about: {
    ourStory: '#our-story',
    team: '#team',
    constitution: '#constitution',
    join: '#join',
  },
  events: {
    workshops: '#workshops',
    hackathons: '#hackathons',
    webinars: '#webinars',
    competitions: '#competitions',
  },
  resources: {
    blog: '#blog',
    projects: '#projects',
    tutorials: '#tutorials',
  },
  contact: {
    email: 'hello@csa.edu',
    phone: '+91 1234567890',
    address: 'Computer Engineering Department, Your College Name',
  },
  company: {
    name: 'CSA',
    description:
      'The Computer Student Association. A community of passionate student developers building solutions for a better future.',
    logo: '/logo.png',
  },
};

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: data.instagramLink },
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
  { icon: Github, label: 'GitHub', href: data.githubLink },
  { icon: Linkedin, label: 'LinkedIn', href: data.linkedinLink },
];

const aboutLinks = [
  { text: 'Our Story', href: data.about.ourStory },
  { text: 'Meet the Team', href: data.about.team },
  { text: 'Constitution', href: data.about.constitution },
  { text: 'Join Us', href: data.about.join },
];

const eventLinks = [
  { text: 'Workshops', href: data.events.workshops },
  { text: 'Hackathons', href: data.events.hackathons },
  { text: 'Webinars', href: data.events.webinars },
  { text: 'Competitions', href: data.events.competitions },
];

const resourceLinks = [
  { text: 'Blog', href: data.resources.blog },
  { text: 'Projects', href: data.resources.projects },
  { text: 'Tutorials', href: data.resources.tutorials },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer() {
  return (
    <footer className="bg-secondary dark:bg-secondary/20 mt-16 w-full place-self-end rounded-t-xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-primary flex justify-center gap-2 sm:justify-start">
              <img
                src={data.company.logo}
                alt="CSA logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-2xl font-semibold">
                {data.company.name}
              </span>
            </div>

            <p className="text-foreground/50 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">About Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-secondary-foreground/70 hover:text-primary transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Events</p>
              <ul className="mt-8 space-y-4 text-sm">
                {eventLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-secondary-foreground/70 hover:text-primary transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Resources</p>
              <ul className="mt-8 space-y-4 text-sm">
                {resourceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-secondary-foreground/70 hover:text-primary transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="#"
                    >
                      <Icon className="text-primary size-5 shrink-0 shadow-sm" />
                      {isAddress ? (
                        <address className="text-secondary-foreground/70 -mt-0.5 flex-1 not-italic transition">
                          {text}
                        </address>
                      ) : (
                        <span className="text-secondary-foreground/70 flex-1 transition">
                          {text}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-secondary-foreground/70 mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}