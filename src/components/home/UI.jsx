import React from 'react';
import simpleUI from '../../assets/home/desktop/illustration-simple-ui.svg';
import FadeInSection from '../FadeInSection';

function UI() {
  return (
    <FadeInSection>
      <section className="mt-20 md:mt-[6.25rem]">
        <div className="myContainer text-center lg:flex lg:flex-row-reverse justify-between items-center lg:text-left">
          <img
            src={simpleUI}
            alt="code"
            className="mx-auto max-w-[391px] lg:max-w-[445px] mb-12 ld:mx-0 lg:mb-0"
          />
          <div>
            <h2 className="fs-700 font-serif mb-6 text-secondary-100">
              Simple UI & UX
            </h2>
            <p className="text-secondary-400 text-[0.9375rem] max-w-[573px] lg:max-w-[445px] mx-auto lg:mx-0">
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.
            </p>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

export default UI;
