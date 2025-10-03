import React from 'react';

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

const CodeBracketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-500">
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
