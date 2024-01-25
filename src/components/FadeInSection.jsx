import React from 'react';
import { Transition } from 'react-transition-group';
import useInView from '../hooks/useInView';

const FadeInSection = (props) => {
  const [ref, inView] = useInView();

  return (
    <div ref={ref}>
      <Transition in={inView} timeout={250}>
        {(state) => (
          <div
            className={`transition-transform duration-1500 ease-out ${
              state === 'entered'
                ? 'opacity-100 visible translate-y-0 animate-fadeIn'
                : 'opacity-0 invisible translate-y-20 '
            }`}
          >
            {props.children}
          </div>
        )}
      </Transition>
    </div>
  );
};

export default FadeInSection;
