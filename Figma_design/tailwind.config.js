/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': { max: '770px' }, // Custom small screen breakpoint
        'xxs':{max:'500px'}
        
      },
    },
  },
  plugins: [],
}

