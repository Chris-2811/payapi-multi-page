import React from 'react';
import code from '../../assets/home/desktop/illustration-easy-to-implement.svg';

function Implement() {
  return (
    <section className="myContainer text-center lg:flex items-center lg:text-left">
      <img src={code} alt="code" className="mx-auto" />
      <div>
        <h2 className="fs-700 font-serif mb-6 text-secondary-100">
          Easy to implement
        </h2>
        <p className="text-secondary-400 text-[0.9375rem] max-w-[573px] lg:max-w-[445px] mx-auto lg:mx-0">
          Our API comes with just a few lines of code. You’ll be up and running
          in no time. We built our documentation page to integrate payments
          functionality with ease.
        </p>
      </div>
    </section>
  );
}

export default Implement;
