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
      ...formData,
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
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
    ) {
      isValid = false;
      newErrors.email = 'Enter a valid email!';
    }
    if (!formData.message) {
      isValid = false;
      newErrors.message = 'This filed can/nt be empty';
    }

    if (!isValid) {
      setErrors(newErrors);
    } else {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      setFormData({ name: '', email: '', company: '', title: '', message: '' });
      setErrors({});
    }
  }

  return (
    <form onSubmit={handleSubmit} className="md:max-w-[445px] mx-auto xl:mx-0">
      <div className="form-control relative ">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className={`placeholder:text-secondary-100/50 pb-4 pl-5 bg-transparent outline-none w-full text-[0.9735rem] focus:border-secondary-200 ${
            errors.name
              ? 'border-b border-[#f00]/50 placeholder:text-[#f00]/50'
              : 'border-b border-secondary-100/50'
          }`}
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      {errors.name && (
        <div className="text-left mt-2">
          <small
            className={` ${
              errors.name ? 'visible self-start  pl-5 ' : 'invisible'
            }  text-[0.75rem] text-[#f00]/50 `}
          >
            This field can't be empty
          </small>
        </div>
      )}

      <div className="form-control pt-9 ">
        <input
          type="text"
          name="email"
          id="email"
          placeholder={'Email Address'}
          className={`placeholder:text-secondary-100/50 pl-5 bg-transparent border-b border-secondary-100/50 pb-4  outline-none w-full text-[0.9735rem] focus:border-secondary-200 ${
            errors.email
              ? 'border-b border-[#f00]/50 placeholder:text-[#f00]/50'
              : 'border-b'
          }`}
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      {errors.email && (
        <div className="text-left mt-2">
          <small
            className={` ${
              errors.email ? 'visible self-start  pl-5 ' : 'invisible'
            }  text-[0.75rem] text-[#f00]/50 `}
          >
            {errors.email}
          </small>
        </div>
      )}
      <div className="form-control  pt-9 ">
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Company Name"
          className={`placeholder:text-secondary-100/50 border-b pb-4 border-secondary-100/50 pl-5 bg-transparent outline-none w-full text-[0.9735rem] focus:border-secondary-200`}
          value={formData.company}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control  pt-9 ">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          className={`placeholder:text-secondary-100/50 border-b border-secondary-100/50 pb-4 pl-5 bg-transparent outline-none w-full text-[0.9735rem] focus:border-secondary-200 `}
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control  pt-9 ">
        <textarea
          rows={4}
          type="text"
          name="message"
          id="message"
          placeholder="Message"
          className={`placeholder:text-secondary-100/50 border-b pb-4 border-secondary-100/50 pl-5 bg-transparent outline-none w-full text-[0.9735rem] focus:border-secondary-200 ${
            errors.message ? 'border-b border-[#f00]/50' : ''
          }'} `}
          value={formData.message}
          onChange={handleInputChange}
        />
      </div>
      {errors.message && (
        <div className="text-left mt-2">
          <small
            className={` ${
              errors.message ? 'visible self-start  pl-5 ' : 'invisible'
            }  text-[0.75rem] text-[#f00]/50 `}
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
        <p className="ml-12 text-[0.9375rem] leading-[1.66] text-secondary-100">
          Stay up-to-date with company announcements and updates to our API
        </p>
      </div>
      <div className="flex items-center gap-6">
        <Button variant={'secondary-dark-sm'}>Submit</Button>
        {submitted && (
          <small className="text-base text-green-500 font-bold">
            Form successfully submitted!
          </small>
        )}
      </div>
    </form>
  );
}

export default Form;
