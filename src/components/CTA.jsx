import React from 'react';
import CTAForm from './CTAForm';

function CTA() {
  return (
    <div className="mb-20 mb:mb-[6.25rem]">
      <div className="text-center myContainer lg:text-left lg:flex items-center justify-between ">
        <h2 className="text-secondary-100  fs-600 font-serif">
          Ready to start?
        </h2>
        <CTAForm />
      </div>
    </div>
  );
}

export default CTA;
