import React from 'react';
import banking from '../../assets/home/desktop/icon-banking-and-coverage.svg';
import consumer from '../../assets/home/desktop/icon-consumer-payments.svg';
import personal from '../../assets/home/desktop/icon-personal-finances.svg';

function Features() {
  return (
    <div className="myContainer py-[6.25rem]">
      <div className="grid  lg:grid-cols-3 md:gap-10">
        <div className="text-center grid grid-rows-custom">
          <img src={banking} alt="" className="mx-auto" />
          <h3 className="fs-450 mt-6 lg:mt-8 mb-4 font-bold text-secondary-100">
            Personal Finances
          </h3>
          <p className="max-w-[573px] mx-auto lg:mx-0 text-secondary-400">
            Consolidate financial data from multiple sources and categorize
            transactions up to 2 years of history. Analyze reports to reconcile
            activities in your account.
          </p>
        </div>
        <div className="text-center  grid grid-rows-custom">
          <img src={consumer} alt="" className="mx-auto" />
          <h3 className="fs-450 mt-6 lg:mt-8 mb-4 font-bold text-secondary-100">
            Personal Finances
          </h3>
          <p className="max-w-[573px] mx-auto lg:mx-0 text-secondary-400">
            Consolidate financial data from multiple sources and categorize
            transactions up to 2 years of history. Analyze reports to reconcile
            activities in your account.
          </p>
        </div>
        <div className="text-center  grid grid-rows-custom">
          <img src={personal} alt="" className="lg-auto mx-auto" />
          <h3 className="fs-450 mt-6 lg:mt-8 mb-4 font-bold text-secondary-100">
            Personal Finances
          </h3>
          <p className="max-w-[573px] mx-auto lg:mx-0 text-secondary-400">
            Consolidate financial data from multiple sources and categorize
            transactions up to 2 years of history. Analyze reports to reconcile
            activities in your account.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
