import React from 'react';
import Button from '../Button';
import CTAForm from '../CTAForm';
import phone from '../../assets/home/desktop/illustration-phone-mockup.svg';

function HeroHome() {
  return (
    <section id="heroHome" className="myContainer pb-20">
      <div className="text-center lg:flex items-center lg:flex-row-reverse lg:text-left gap-10">
        <div className="flex justify-center lg:w-2/5">
          <div className="bg-mobile-phone w-full min-h-[240px] h-[40vw]   bg-center bg-no-repeat"></div>
        </div>
        <div className="lg:w-3/5">
          <h1 className="fs-900 text-secondary-100 font-serif">
            Start building with our APIs for absolutely free.
          </h1>
          <div className="flex justify-start mb-6">
            <CTAForm />
          </div>
          <p className="text-[0.9375rem] text-secondary-400">
            Have any questions? <span className="font-bold">Contact Us</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
