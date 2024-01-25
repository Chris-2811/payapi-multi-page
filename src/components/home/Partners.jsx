import React from 'react';
import { ReactComponent as Google } from '../../assets/shared/desktop/google.svg';
import { ReactComponent as HewlettPackard } from '../../assets/shared/desktop/hewlett-packard.svg';
import { ReactComponent as Oracle } from '../../assets/shared/desktop/oracle.svg';
import { ReactComponent as Microsoft } from '../../assets/shared/desktop/microsoft.svg';
import { ReactComponent as Nvidia } from '../../assets/shared/desktop/nvidia.svg';
import { ReactComponent as Tesla } from '../../assets/shared/desktop/tesla.svg';
import Button from '../Button';
import FadeInSection from '../FadeInSection';

function Partners() {
  return (
    <section className="bg-secondary-200 pt-[5.3125rem] pb-20 lg:py-[6.25rem]">
      <FadeInSection>
        <div className="myContainer lg:flex flex-row-reverse items-center">
          <ul
            role="list"
            className="grid grid-cols-2 md:grid-cols-3 max-w-[280px] md:max-w-[536px] mx-auto place-items-center  gap-10 items-center lg:w-3/6"
          >
            <li>
              <Tesla className="icon-light" />
            </li>
            <li>
              <Microsoft className="icon-light" />
            </li>
            <li>
              <HewlettPackard className="icon-light" />
            </li>
            <li>
              <Oracle className="icon-light" />
            </li>
            <li>
              <Google className="icon-light" />
            </li>
            <li>
              <Nvidia className="icon-light" />
            </li>
          </ul>
          <div className="text-center lg:text-left mt-[3.5rem] md:mt-16 lg:w-3/6 lg:mt-0">
            <h2 className="text-primary-200 fs-600 font-serif mb-4 md:mb-6 ">
              Who we work with
            </h2>
            <p className="text-primary-200/70 leading-[1.8] text-[0.9375rem] mb-[3.75rem] md:mb-8 md:max-w-[456px] lg:max-w-[445px] mx-auto lg:mx-0">
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.{' '}
            </p>
            <Button variant="secondary-light">About Us</Button>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}

export default Partners;
