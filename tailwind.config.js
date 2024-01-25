/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      blg: '1200px',
      xl: '1440px',
    },
    extend: {
      colors:{
        DarkBlue: "#0c2233",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      maxWidth: {
        "8xl": "90rem",
      },
      spacing: {
        '76': '19rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '116': '29rem',
        '120': '30rem',
        // Add other custom spacing values as needed
      },
      minWidth: {
        '0': '0',
        'xsm': '16rem',
        'sm': '30rem', 
        'md': '48rem',
        'lg': '64rem', 
        'xl': '80rem', 
        '2xl': '96rem',
      }
    },
  },
  plugins: [],
}

