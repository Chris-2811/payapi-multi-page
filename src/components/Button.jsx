import React from 'react';
import PropTypes from 'prop-types';

function Button({ variant = 'primary', children, ...props }) {
  const variantClasses = {
    primary:
      'bg-primary-100 text-white text-[0.9375rem] pt-[1rem] pb-[0.875rem] pl-[1.625rem] pr-[1.5rem] hover:bg-secondary-300',
    'primary-200':
      'bg-primary-100 w-full text-white text-[0.9375rem] pt-[1rem] pb-[0.875rem] pl-[1.625rem] pr-[1.5rem] hover:bg-secondary-300',
    'secondary-light':
      'bg-secondary-200 px-8 border pt-4 pb-[0.875rem] hover:bg-primary-200 text-white  hover:text-secondary-200 font-bold',
    'secondary-dark':
      'bg-transparent border border-secondary-100 w-[168px] pt-4 pb-[0.875rem] hover:bg-secondary-100 hover:text-white',
    'secondary-dark-sm':
      'bg-transparent border border-secondary-100 w-[152px] pt-4 pb-[0.875rem] hover:bg-secondary-100 hover:text-white',
  };

  return (
    <button
      className={`${variantClasses[variant]} rounded-full font-bold`}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primary',
    'secondary-light',
    'secondary-dark',
    'primary-200',
    'secondary-dark-sm',
  ]),
};

export default Button;
