import React from 'react';
import CTA from '../components/CTA';
import HeroAbout from '../components/about/HeroAbout';

function About() {
  return (
    <div className="mt-12 md:mt-[3.5rem] lg:mt-[5.125rem]">
      <HeroAbout />
      <div className="mt-12 mb-20 md:mt-[4.5rem] md:mb-[6.25rem]">
        <div className="myContainer">
          <CTA />
        </div>
      </div>
    </div>
  );
}

export default About;
