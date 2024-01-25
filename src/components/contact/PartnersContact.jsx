import React from 'react';
import tesla from '../../assets/shared/desktop/tesla.svg';
import google from '../../assets/shared/desktop/google.svg';
import hewlettPackard from '../../assets/shared/desktop/hewlett-packard.svg';
import oracle from '../../assets/shared/desktop/oracle.svg';
import microsoft from '../../assets/shared/desktop/microsoft.svg';
import nvidia from '../../assets/shared/desktop/nvidia.svg';
import Button from '../Button';

function PartnersContact() {
  return (
    <div className=" md:px-0 md:max-w-[541px] mx-auto mt-20 md:mt-16  xl:mx-0 xl:mb-28">
      <h1 className="text-secondary-100/75 max-w-[445px] mx-auto text-2xl font-serif mb-10 lg:mb-12 xl:mx-0">
        Join the thousands of innovators already building with us
      </h1>
      <ul
        role="list"
        className="grid max-w-[360px] md:max-w-[541px] mx-auto px-4 grid-cols-2 md:grid-cols-3 gap-[3.125rem] place-items-center lg:px-0 "
      >
        <li className=" ">
          <img
            src={tesla}
            alt="tesla"
            className="w-full object-contain h-auto"
          />
        </li>
        <li className=" ">
          <img src={microsoft} alt="microsoft" className="w-full " h-auto />
        </li>
        <li className=" object-contain">
          <img src={hewlettPackard} alt="hewlett-packard" />
        </li>
        <li className="">
          <img
            src={oracle}
            alt="oracle"
            className="w-full object-contain h-auto"
          />
        </li>
        <li className=" ">
          <img
            src={google}
            alt="google"
            className="w-full object-contain h-auto"
          />
        </li>
        <li className=" ">
          <img
            src={nvidia}
            alt="nvidia"
            className="w-full object-contain"
            h-auto
          />
        </li>
      </ul>
    </div>
  );
}

export default PartnersContact;
