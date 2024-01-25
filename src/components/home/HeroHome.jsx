import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import CTAForm from '../CTAForm';
import phone from '../../assets/home/desktop/illustration-phone-mockup.svg';
import pattern from '../../assets/shared/desktop/bg-pattern-circle.svg';
import FadeInSection from '../FadeInSection';

function HeroHome() {
  return (
    <section id="heroHome" className="myContainer pb-20">
      <div className="absolute -top-[35%] md:-top-[45%] left-[50%] -translate-x-[50%] w-[780px] h-[780px] md:w-[949px] md:h-[949px] lg:w-[780px] lg:h-[780px] -z-10 lg:right-0 lg:translate-x-20 lg:-top-[15%]">
        <img src={pattern} alt="" className="w-full" />
      </div>
      <FadeInSection>
        <div className="text-center mt-8 md:mt-[3.25rem] lg:mt-[3.5rem] lg:flex items-center lg:flex-row-reverse lg:text-left gap-10 lg:gap-16">
          <div className="flex justify-center w-full">
            <img
              src={phone}
              alt="mobile-phone"
              className="h-[263px] w-[128px] sm:w-[148px] sm:h-[283px]  md:w-[263px] md:h-[500px] mb-6 md:mb-12 lg:mb-0"
            />
          </div>
          <div className="lg:min-w-[546px]">
            <h1 className="fs-900 max-w-[327px] text-secondary-100 font-serif md:max-w-[573px] mx-auto lg:mx-0">
              Start building with our APIs for absolutely free.
            </h1>
            <div className="flex justify-start mb-6 md:mb-4">
              <CTAForm />
            </div>
            <p className="text-[0.9375rem] text-secondary-400 lg:pl-[1.6875rem] ">
              Have any questions?
              <Link to="contact" className="font-bold ml-2">
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}

export default HeroHome;
