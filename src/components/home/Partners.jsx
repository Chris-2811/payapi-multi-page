import React from 'react';
import tesla from '../../assets/shared/desktop/tesla.svg';
import google from '../../assets/shared/desktop/google.svg';
import hewlettPackard from '../../assets/shared/desktop/hewlett-packard.svg';
import oracle from '../../assets/shared/desktop/oracle.svg';
import microsoft from '../../assets/shared/desktop/microsoft.svg';
import nvidia from '../../assets/shared/desktop/nvidia.svg';
import Button from '../Button';

function Partners() {
  return (
    <section className="bg-secondary-200 pt-[5.5rem] pb-20 lg:py-[6.25rem]">
      <div className="myContainer lg:flex flex-row-reverse items-center">
        <ul
          role="list"
          className="grid grid-cols-2 md:grid-cols-3 max-w-[280px] md:max-w-[536px] mx-auto place-items-center  gap-10 items-center lg:w-3/6"
        >
          <li>
            <img src={tesla} alt="tesla" />
          </li>
          <li>
            <img src={microsoft} alt="microsoft" />
          </li>
          <li>
            <img src={hewlettPackard} alt="hewlett-packard" />
          </li>
          <li>
            <img src={oracle} alt="oracle" />
          </li>
          <li>
            <img src={google} alt="google" />
          </li>
          <li>
            <img src={nvidia} alt="nvidia" />
          </li>
        </ul>
        <div className="text-center lg:text-left mt-[3.5rem] md:mt-16 lg:w-3/6 lg:mt-0">
          <h2 className="text-primary-200 fs-600 font-serif mb-4 md:mb-6 ">
            Who we work with
          </h2>
          <p className="text-primary-200/70 leading-[1.8] text-[0.9375rem] mb-[3.75rem] md:mb-8 md:max-w-[456px] lg:max-w-[445px] mx-auto lg:mx-0">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.{' '}
          </p>
          <Button variant="secondary-light">About Us</Button>
        </div>
      </div>
    </section>
  );
}

export default Partners;
