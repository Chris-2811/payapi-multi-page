import React from 'react';
import HeroHome from '../components/home/HeroHome';
import Partners from '../components/home/Partners';
import Implement from '../components/home/Implement';
import UI from '../components/home/UI';
import CTA from '../components/CTA';
import Features from '../components/home/Features';

function Home() {
  return (
    <div>
      <HeroHome />
      <Partners />
      <Implement />
      <UI />
      <Features />
      <CTA />
    </div>
  );
}

export default Home;
