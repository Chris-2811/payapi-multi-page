import React from 'react';
import teamMobile from '../../assets/about/mobile/image-team-members.jpg';
import teamTablet from '../../assets/about/tablet/image-team-members.jpg';
import teamDesktop from '../../assets/about/desktop/image-team-members.jpg';
import Stats from './Stats';

function HeroAbout() {
  return (
    <div className="mb-12 md:mb-[3.5rem]">
      <div className="myContainer ">
        <div className="text-center lg:text-left mb-[3.5rem] md:mb-[5.75rem] lg:mb-[6.25rem] lg:pl-[6rem]">
          <h1 className="fs-800 mb-10 mx-auto max-w-[573px]  md:mb-[3.5rem] lg:mb-[3.25rem] lg:max-w-[730px] xl:mx-0 text-secondary-100 font-serif -tracking-[0.25px] lg:mx-0">
            We empower innovators by delivering access to the financial system
          </h1>
          <div className="md:flex items-start justify-between md:text-left">
            <h3 className="fs-500 text-secondary-100 font-serif mb-4 md:min-w-[232px]">
              Our Vision
            </h3>
            <p className="text-secondary-400 max-w-[456px] lg:max-w-[635px] mx-auto md:mx-0">
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.{' '}
            </p>
          </div>
          <div className="md:flex items-start justify-between md:text-left mt-16 lg:mt-[3.5rem]">
            <h3 className="fs-500 text-secondary-100 font-serif mb-4 md:min-w-[232px]">
              Our Vision
            </h3>
            <p className="text-secondary-400 max-w-[456px] lg:max-w-[635px] mx-auto md:mx-0">
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.{' '}
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={teamMobile} alt="" className="w-full mb-12 md:hidden" />
        <img
          src={teamTablet}
          alt=""
          className="w-full mb-12 hidden md:block lg:hidden"
        />
        <img
          src={teamDesktop}
          alt=""
          className="w-full mb-12 hidden lg:block"
        />
      </div>
      <div className="mb-12 md:mb-16">
        <Stats />
      </div>
      <div className="myContainer text-center lg:pl-[6rem]">
        <div className="md:flex items-start justify-between md:text-left">
          <h3 className="fs-500 text-secondary-100 font-serif mb-4 md:min-w-[232px]">
            The Culture
          </h3>
          <p className="text-secondary-400 max-w-[456px] lg:max-w-[635px] mx-auto md:mx-0">
            Our main goal is to build beautiful consumer experiences along with
            developer-friendly infrastructure. The result is an intelligent tool
            that gives everyone the ability to create amazing products that
            solve big problems. We are deeply focused on democratizing financial
            services through technology.{' '}
          </p>
        </div>
        <div className="md:flex items-start justify-between md:text-left mt-16 lg:mt-[3.5rem]">
          <h3 className="fs-500 text-secondary-100 font-serif mb-4 md:min-w-[232px]">
            The People
          </h3>
          <p className="text-secondary-400 max-w-[456px] lg:max-w-[635px] mx-auto md:mx-0">
            We're all passionate about building a more efficient and inclusive
            financial infrastructure together. At PayAPI, we have diverse
            backgrounds and skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroAbout;
