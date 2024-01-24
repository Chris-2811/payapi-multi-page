import React from 'react';
import HeroPricing from '../components/pricing/HeroPricing';
import CTA from '../components/CTA';

function Pricing() {
  return (
    <div className="myContainer pt-12">
      <HeroPricing />
      <div className="my-20">
        <CTA />
      </div>
    </div>
  );
}

export default Pricing;
