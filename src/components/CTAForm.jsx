import React from 'react';
import Button from './Button';

function CTAForm() {
  return (
    <form className="w-full lg:w-auto lg:mb-0">
      <div className="md:flex justify-center max-w-[445px] mx-auto lg:mx-0 ">
        <div className="form-control md:relative md:flex justify-center md:mt-6 md:mb-4 lg:ml-auto">
          <input
            className="mt-6 mb-4 max-w-[445px] md:max-w-none md:mt-0 md:mb-0 bg-white w-full pl-[1.6875rem] font-bold pt-4 pb-[0.875rem] placeholder:text-secondary-100/50 rounded-full shadow-emailInput md:w-[445px]"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
          />
          <div className="md:absolute right-0">
            <Button variant="primary-200">Schedule a Demo</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CTAForm;
