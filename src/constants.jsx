import React from 'react';

// --- ICON COMPONENTS ---
// Must be defined BEFORE they are used in the data constants below

const CodeBracketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-1 -1 26 26" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>
);

const CpuChipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M12 5.25v-1.5m0 15v-1.5m3.75-15H15m-6 15h1.5m-1.5-15H6m6 15H9m3.75-15H12m0 15H12m3.75-15h1.5m-1.5 15h1.5m-1.5-15H18m-6 15h1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.801 0-3.356.97-4.125 2.312M3 14.25c0-2.485 2.099-4.5 4.688-4.5 1.801 0 3.356.97 4.125 2.312M21 14.25c0-2.485-2.099-4.5-4.688-4.5-1.801 0-3.356.97-4.125 2.312M3 8.25c0-2.485 2.099-4.5 4.688-4.5 1.801 0 3.356.97 4.125 2.312" />
  </svg>
);

const CloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-5.357-2.257 3 3 0 0 0-6.363.352A3.75 3.75 0 0 0 2.25 15Z" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.016h-.008v-.016Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const TwitterIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.51-.93 8.354-4.32 9.67-1.734.54-3.56.34-5.106-.52-1.346-.76-2.433-1.9-3.16-3.25.082.02.164.03.246.04.688.08 1.36-.06 2.003-.34-1.12-.32-2.01-.93-2.54-1.92-.28-.52-.42-1.1-.4-1.68.35.2.71.32 1.09.34-.64-.46-1.1-1.13-1.28-1.9.0-1.04.5-1.97 1.24-2.72 1.25 1.52 2.95 2.62 4.85 3.08-.04-.23-.06-.46-.06-.7 0-1.14.59-2.2 1.52-2.75.83-.49 1.8-.56 2.71-.25.38-.08.75-.2 1.1-.38-.14.42-.42.77-.79 1.04.36-.04.71-.12 1.04-.28-.24.36-.52.68-.84.94z"/>
  </svg>
);

// --- DATA CONSTANTS ---

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Domains', href: '#domains' },
  { name: 'Events', href: '#events' },
  { name: 'Contact', href: '#contact' },
];

export const TEAM_MEMBERS = [
  {
    name: 'Alex Johnson',
    role: 'Club Lead',
    imageUrl: 'https://picsum.photos/seed/alex/400/400',
    socials: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    name: 'Maria Garcia',
    role: 'Web Development Lead',
    imageUrl: 'https://picsum.photos/seed/maria/400/400',
    socials: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Sam Chen',
    role: 'AI/ML Lead',
    imageUrl: 'https://picsum.photos/seed/sam/400/400',
    socials: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    name: 'Jessica Lee',
    role: 'Cloud Computing Lead',
    imageUrl: 'https://picsum.photos/seed/jessica/400/400',
    socials: {
      linkedin: '#',
      github: '#',
    },
  },
];

export const DOMAINS = [
  {
    name: 'Web & Mobile Development',
    description: 'Master the art of creating stunning websites and powerful mobile applications using the latest frameworks.',
    icon: <CodeBracketIcon />,
  },
  {
    name: 'Artificial Intelligence & ML',
    description: 'Dive into the world of intelligent systems, neural networks, and data-driven predictions.',
    icon: <CpuChipIcon />,
  },
  {
    name: 'Cloud Computing',
    description: 'Explore scalable infrastructure and services from top providers like GCP, AWS, and Azure.',
    icon: <CloudIcon />,
  },
  {
    name: 'Cyber Security',
    description: 'Learn to protect systems and networks from digital attacks and secure critical information.',
    icon: <ShieldCheckIcon />,
  },
];

export const EVENTS = [
  {
    title: 'Hackathon 2024',
    description: 'A 24-hour coding marathon to build innovative solutions and win exciting prizes.',
    imageUrl: 'https://picsum.photos/seed/hackathon/600/400',
    date: 'OCT 25, 2024',
  },
  {
    title: 'Intro to Gemini API',
    description: "A hands-on workshop on leveraging the power of Google's Gemini for your projects.",
    imageUrl: 'https://picsum.photos/seed/gemini/600/400',
    date: 'NOV 10, 2024',
  },
  {
    title: 'Cloud Study Jams',
    description: 'A guided series to get you started with Google Cloud Platform and earn skill badges.',
    imageUrl: 'https://picsum.photos/seed/cloud/600/400',
    date: 'NOV 22, 2024',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'How can I join the club?',
    answer: 'You can join us by filling out the registration form available on the "Join Us" link. Follow our social media for announcements on recruitment drives!',
  },
  {
    question: 'Are there any prerequisites to join?',
    answer: 'Absolutely not! We welcome students from all backgrounds and skill levels. All you need is enthusiasm and a willingness to learn.',
  },
  {
    question: 'What are the benefits of joining?',
    answer: 'Members get access to exclusive workshops, mentorship from seniors, networking opportunities with industry professionals, and a chance to work on real-world projects.',
  },
  {
    question: 'How often are events held?',
    answer: 'We typically hold at least one event, such as a workshop or a speaker session, every month. Major events like hackathons are held once or twice a year.',
  },
];

export const socialLinks = [
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: '#',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    href: '#',
  },
  {
    icon: TwitterIcon,
    label: 'Twitter',
    href: '#',
  },
];