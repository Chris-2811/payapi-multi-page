import React from 'react';
import { useState } from 'react';
import logo from '../assets/shared/desktop/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button';
import mobileMenu from '../assets/shared/mobile/menu.svg';
import closeIcon from '../assets/shared/mobile/close.svg';

function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="myContainer pt-10 lg:pt-[2.8125rem]">
      <div className="flex justify-between items-center md:gap-16">
        <Link to={'/'}>
          <img src={logo} alt="logo" className="w-[135px] " />
        </Link>
        <div className="hidden md:flex grow justify-between items-center">
          <nav role="list" aria-aria-label="primary-nav">
            <ul className="flex gap-10 text-[15px] font-bold text-secondary-100/70 ">
              <li className="hover:text-secondary-100">
                <NavLink to={'/pricing'}>Pricing</NavLink>
              </li>
              <li className="hover:text-secondary-100">
                <NavLink to={'about'}>About</NavLink>
              </li>
              <li className="hover:text-secondary-100">
                <NavLink to={'contact'}>Contact</NavLink>
              </li>
            </ul>
          </nav>
          <Button> Schedule a Demo </Button>
        </div>
        <button
          className="md:hidden z-10"
          onClick={() => setIsToggled(!isToggled)}
        >
          <img src={!isToggled ? mobileMenu : closeIcon} alt="" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-[300px] transform transition-transform duration-300 ease-in  px-6 bg-secondary-200 h-full ${
          isToggled ? 'translate-x-0' : 'translate-x-[100%]'
        }`}
      >
        <nav className="mt-[6rem] mb-8 pt-[2.3875rem] border-t border-primary-200/20">
          <ul
            className={`flex-col text-center text-[15px] font-bold text-primary-200/70 fs-450}`}
          >
            <li className="mb-8">
              <Link>Pricing</Link>
            </li>
            <li className="mb-8">
              <Link>About</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center">
          <Button>Schedule a Demo</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
