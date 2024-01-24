import React from 'react';
import CTA from '../components/CTA';
import HeroAbout from '../components/about/HeroAbout';

function About() {
  return (
    <div className="mt-12 md:mt-[3.5rem] lg:mt-[5.25rem]">
      <HeroAbout />
      <CTA />
    </div>
  );
}

export default About;
