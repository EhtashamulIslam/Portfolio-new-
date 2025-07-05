// components/homepage/HomeClient.js
"use client";

import dynamic from 'next/dynamic';

// Dynamically import components with SSR disabled to avoid document access
const HeroSection = dynamic(() => import("./hero-section"), { ssr: false });
const AboutSection = dynamic(() => import("./about"), { ssr: false });
const Experience = dynamic(() => import("./experience"), { ssr: false });
const Skills = dynamic(() => import("./skills"), { ssr: false });
const Projects = dynamic(() => import("./projects"), { ssr: false });
const Education = dynamic(() => import("./education"), { ssr: false });
const Blog = dynamic(() => import("./blog"), { ssr: false });
const ContactSection = dynamic(() => import("./contact"), { ssr: false });

export default function HomeClient({ blogs }) {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </div>
  );
}