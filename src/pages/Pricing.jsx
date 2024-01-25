import React from 'react';
import HeroPricing from '../components/pricing/HeroPricing';
import CTA from '../components/CTA';

function Pricing() {
  return (
    <div className="mt-12 md:mt-[4.75rem] lg:mt-[5.125rem]">
      <div className="myContainer">
        <HeroPricing />
        <div className="my-20 md:my-[6.25rem]">
          <CTA />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
