import React from 'react';
import logo from '../assets/shared/desktop/logo-white.svg';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-secondary-200 py-10 md:py-8">
      <div className="myContainer md:gap-16 text-center md:flex items-center">
        <img src={logo} alt="logo" className="mx-auto mb-10 md:mb-0 lg:mx-0" />
        <div className="md:flex items-center justify-between grow">
          <nav role="list" aria-label="secondary-nav" className="mb-8 md:mb-0">
            <ul
              role="list"
              className="text-[0.9375rem] text-primary-200/70 flex flex-col md:flex-row gap-8 font-bold"
            >
              <li className="hover:text-white">
                <NavLink to={'/pricing'}>Pricing</NavLink>
              </li>
              <li className="hover:text-white">
                <NavLink to={'/about'}>About</NavLink>
              </li>
              <li className="hover:text-white">
                <NavLink to={'/contact'}>Contact</NavLink>
              </li>
            </ul>
          </nav>
          <div className="socials flex justify-center">
            <ul role="list" className="flex items-center gap-4 ">
              <li>
                <FaFacebook
                  size={24}
                  fill="white"
                  className="cursor-pointer hover:fill-primary-100"
                />
              </li>
              <li>
                <FaTwitter
                  size={24}
                  className="cursor-pointer hover:fill-primary-100"
                  fill="white"
                  alt=""
                />
              </li>
              <li>
                <FaLinkedin
                  size={24}
                  className="cursor-pointer hover:fill-primary-100"
                  fill="white"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
