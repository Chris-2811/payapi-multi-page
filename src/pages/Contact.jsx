import React from 'react';
import CTA from '../components/CTA';
import Form from '../components/contact/Form';
import Partners from '../components/home/Partners';
import PartnersContact from '../components/contact/PartnersContact';

function Contact() {
  return (
    <div className="mt-12 md:mt-[3.5rem] lg:mt-[5.25rem]">
      <div className="myContainer-lg text-center xl:text-left">
        <h1 className="fs-800 mx-auto mb-10 md:mb-[3.5rem] xl:mb-[3.25rem] text-secondary-100 font-serif max-w-[530px] xl:max-w-[730px] xl:mx-0">
          Submit a help request and we’ll get in touch shortly.
        </h1>
        <div className="flex flex-col xl:flex-row lg:items-center justify-between">
          <Form />
          <PartnersContact />
        </div>
      </div>
      <div className="xl:mt-20">
        <CTA />
      </div>
    </div>
  );
}

export default Contact;
