import React from 'react';
import Button from '../Button';
import check from '../../assets/shared/desktop/icon-check.svg';
import FadeInSection from '../FadeInSection';

function HeroPricing() {
  return (
    <FadeInSection>
      <div className="text-black  text-center lg:text-left">
        <h1 className="fs-800 font-serif text-secondary-100 mb-12 lg:mb-[3.5rem]">
          Pricing
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-[2.5rem]">
          <div className="lg:w-[350px] ">
            <h3 className="text-primary-100 font-serif fs-500 mb-20 font-bold md:mb-3 lg:mb-20">
              Free Plan
            </h3>
            <p className="hidden text-secondary-400 text-[0.9375rem] mb-[1.1875rem] md:block lg:hidden">
              Build and test using our core set of products with up to 100 API
              requests
            </p>
            <p className="text-secondary-100 font-serif text-[3.5rem] pb-6 border-b border-secondary-100/25 ">
              $0.00
            </p>
            <div className="pt-6  flex flex-col items-center gap-2  pb-6 border-b border-secondary-100/25 mb-6 lg:items-start">
              <div className="w-[134px] flex flex-col gap-2 ">
                <div className="flex items-center gap-6 min-w-[134px]">
                  <img src={check} alt="" />
                  <p className="text-secondary-100">Transactions</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src={check} alt="" />
                  <p className="text-secondary-100">Auth</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src={check} alt="" />
                  <p className="text-secondary-100">Identity</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src={check} alt="" className="opacity-0" />
                  <p className="text-secondary-100/40">Investments</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src={check} alt="" className="opacity-0" />
                  <p className="text-secondary-100/40">Assets</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src={check} alt="" className="opacity-0" />
                  <p className="text-secondary-100/40">Liabilities</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src={check} alt="" className="opacity-0" />
                  <p className="text-secondary-100/40">Income</p>
                </div>
              </div>
            </div>
            <Button variant={'secondary-dark'}>Request Access</Button>
          </div>
          <div className=" lg:w-[350px] lg:text-left ">
            <h3 className="text-primary-100  font-serif fs-500 mb-20 md:mb-3 lg:mb-20 font-bold mt-12 md:mt-0">
              Basic Plan
            </h3>
            <p className="hidden text-secondary-400 text-[0.9375rem] mb-[1.1875rem] md:block lg:hidden">
              Launch your project with unlimited requests and no contractual
              minimums
            </p>
            <p className="text-secondary-100 font-serif text-[3.5rem] pb-6 border-b border-secondary-100/25 w-full ">
              $249.00
            </p>
            <div className="pt-6 w-full  flex flex-col items-center gap-2  pb-6 border-b border-secondary-100/25 mb-6 lg:items-start">
              <div className="w-[134px] flex flex-col gap-2 ">
                <div className="flex items-center gap-6 min-w-[134px]">
                  <img src={check} alt="" />
                  <p className="text-secondary-100">Transactions</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src={check} alt="" />
                  <p className="text-secondary-100">Auth</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src={check} alt="" />
                  <p className="text-secondary-100">Identity</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src={check} alt="" />
                  <p className="text-secondary-100">Investments</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src={check} alt="" />
                  <p className="text-secondary-100">Assets</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src={check} alt="" className="opacity-0" />
                  <p className="text-secondary-100/40">Liabilities</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src={check} alt="" className="opacity-0" />
                  <p className="text-secondary-100/40">Income</p>
                </div>
              </div>
            </div>
            <Button variant={'secondary-dark'}>Request Access</Button>
          </div>
          <div className="lg:w-[350px] lg:text-left">
            <h3 className="text-primary-100 font-serif fs-500 mb-20 md:mb-3 lg:mb-20 font-bold mt-12 md:mt-0">
              Premium Plan
            </h3>
            <p className="hidden text-secondary-400 text-[0.9375rem] my-[1.1875rem] md:block lg:hidden">
              Get tailored solutions, volume pricing, and dedicated support for
              your team{' '}
            </p>
            <p className="text-secondary-100 font-serif text-[3.5rem] pb-6 border-b border-secondary-100/25 ">
              $499.00
            </p>
            <div className="pt-6  flex flex-col items-center gap-2  pb-6 border-b border-secondary-100/25 mb-6 lg:items-start">
              <div className="w-[134px] flex flex-col gap-2">
                <div className="flex items-center gap-6 min-w-[134px]">
                  <img src={check} alt="" />
                  <p className="text-secondary-100">Transactions</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src={check} alt="" />
                  <p className="text-secondary-100">Auth</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src={check} alt="" />
                  <p className="text-secondary-100">Identity</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src={check} alt="" />
                  <p className="text-secondary-100">Investments</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src={check} alt="" />
                  <p className="text-secondary-100">Assets</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src={check} alt="" />
                  <p className="text-secondary-100">Liabilities</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src={check} alt="" />
                  <p className="text-secondary-100">Income</p>
                </div>
              </div>
            </div>
            <Button variant={'secondary-dark'}>Request Access</Button>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}

export default HeroPricing;
