import React from 'react';
import simpleUI from '../../assets/home/desktop/illustration-simple-ui.svg';

function UI() {
  return (
    <section className="myContainer text-center lg:flex lg:flex-row-reverse items-center lg:text-left">
      <img src={simpleUI} alt="code" className="mx-auto" />
      <div>
        <h2 className="fs-700 font-serif mb-6 text-secondary-100">
          Simple UI & UX
        </h2>
        <p className="text-secondary-400 text-[0.9375rem] max-w-[573px] lg:max-w-[445px] mx-auto lg:mx-0">
          Our pre-built form is easy to integrate in your app or website’s
          checkout flow and designed to optimize conversion.
        </p>
      </div>
    </section>
  );
}

export default UI;
