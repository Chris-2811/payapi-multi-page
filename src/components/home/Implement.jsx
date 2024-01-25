import React from 'react';
import code from '../../assets/home/desktop/illustration-easy-to-implement.svg';
import FadeInSection from '../FadeInSection';

function Implement() {
  return (
    <section className="mt-20 md:mt-[6.25rem]">
      <FadeInSection>
        <div className="myContainer text-center lg:flex items-center justify-between lg:text-left">
          <img
            src={code}
            alt="code"
            className="mx-auto max-w-[391px] lg:max-w-[445px] mb-12 lg:mx-0"
          />
          <div>
            <h2 className="fs-700 font-serif mb-6 text-secondary-100">
              Easy to implement
            </h2>
            <p className="text-secondary-400 text-[0.9375rem] max-w-[573px] lg:max-w-[445px] mx-auto lg:mx-0">
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}

export default Implement;
