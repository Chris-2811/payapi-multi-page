/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['"Public Sans"', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
      },
      colors: {
        'primary-100': 'hsl(337, 48%, 49%)',
        'primary-200': 'hsl(220, 60%, 99%)',
        'secondary-100': 'hsl(207, 33%, 32%)',
        'secondary-200': 'hsl(207, 27%, 15%)',
        'secondary-300': 'hsl(337, 60%, 64%)',
        'secondary-400': 'hsl(207, 16%, 50%)',
      },
      backgroundImage: {
        'mobile-phone':
          'url(src/assets/home/desktop/illustration-phone-mockup.svg)',
      },
      boxShadow: {
        emailInput: '10px 10px 25px -10px rgba(54, 83, 107, 0.25)',
      },
      gridTemplateRows: {
        custom: 'auto auto 1fr',
        'custom-pricing': 'auto 1fr auto auto auto',
      },
      transitionProperty: {
        opacity: 'opacity',
        transform: 'transform',
      },
      transitionDuration: {
        500: '500ms',
        1500: '1500ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 750ms ease-out forwards',
      },
    },
  },
  plugins: [],
};
