import React from 'react';
import Button from '../Button';
import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  function handleInputChange(e) {
    setFormData({
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newErrors = {};
    let isValid = true;

    if (!formData.name) {
      isValid = false;
      newErrors.name = 'This filed can/nt be empty';
    }
    if (!formData.email) {
      isValid = false;
      newErrors.email = 'This filed can/nt be empty';
    }
    if (!formData.message) {
      isValid = false;
      newErrors.message = 'This filed can/nt be empty';
    }

    setErrors(newErrors);
  }

  return (
    <form onSubmit={handleSubmit} className="md:max-w-[445px] mx-auto xl:mx-0">
      <div className="form-control relative pb-4 border-b border-secondary-100/50">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="placeholder:text-secondary-100/50 pl-5 bg-transparent outline-none w-full text-[0.9735rem]  "
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      {errors.name && (
        <div className="text-left mt-2">
          <small
            className={` ${
              errors.name ? 'visible self-start  pl-5 ' : 'invisible'
            }  text-[0.75rem] text-[#f00] `}
          >
            This field can't be empty
          </small>
        </div>
      )}

      <div className="form-control pb-4 pt-9 border-b border-secondary-100/50">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email Address!"
          className="placeholder:text-secondary-100/50 pl-5 bg-transparent outline-none w-full text-[0.9735rem]  "
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      {errors.email && (
        <div className="text-left mt-2">
          <small
            className={` ${
              errors.email ? 'visible self-start  pl-5 ' : 'invisible'
            }  text-[0.75rem] text-[#f00] `}
          >
            This field can't be empty
          </small>
        </div>
      )}
      <div className="form-control pb-4 pt-9 border-b border-secondary-100/50">
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Company Name"
          className="placeholder:text-secondary-100/50 pl-5 bg-transparent outline-none w-full text-[0.9735rem]  "
          value={formData.company}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control pb-4 pt-9 border-b border-secondary-100/50">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          className="placeholder:text-secondary-100/50 pl-5 bg-transparent outline-none w-full text-[0.9735rem]  "
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control pb-4 pt-9 border-b border-secondary-100/50">
        <textarea
          type="text"
          name="message"
          id="message"
          placeholder="Message"
          className="placeholder:text-secondary-100/50 pl-5 bg-transparent outline-none w-full text-[0.9735rem]  "
          value={formData.message}
          onChange={handleInputChange}
        />
      </div>
      {errors.message && (
        <div className="text-left mt-2">
          <small
            className={` ${
              errors.message ? 'visible self-start  pl-5 ' : 'invisible'
            }  text-[0.75rem] text-[#f00] `}
          >
            This field can't be empty
          </small>
        </div>
      )}
      <div className="form-control my-6 text-left">
        <label className="block relative  cursor-pointer text-xl select-none">
          <input
            type="checkbox"
            onChange={() => setIsChecked(!isChecked)}
            className="hidden"
          />
          <span
            className={`absolute translate-y-[50%] flex items-center justify-center top-[50%] left-0 h-6 w-6 ${
              isChecked ? 'bg-primary-100' : 'bg-secondary-100/25'
            }`}
          >
            {isChecked && <FiCheck className="text-white" strokeWidth={3} />}
          </span>
        </label>
        <p className="ml-12 text-[0.9375rem] text-secondary-100">
          Stay up-to-date with company announcements and updates to our API
        </p>
      </div>
      <div className="flex">
        <Button variant={'secondary-dark-sm'}>Submit</Button>
      </div>
    </form>
  );
}

export default Form;
