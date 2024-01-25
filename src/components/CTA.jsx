import React from 'react';
import CTAForm from './CTAForm';
import FadeInSection from './FadeInSection';

function CTA() {
  return (
    <FadeInSection>
      <div className="">
        <div className="text-center lg:text-left lg:flex items-center justify-between ">
          <h2 className="text-secondary-100  fs-600 font-serif">
            Ready to start?
          </h2>
          <CTAForm />
        </div>
      </div>
    </FadeInSection>
  );
}

export default CTA;
