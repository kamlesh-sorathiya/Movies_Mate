/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line 
module.exports = {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      maxHeight: {
        '144': '36rem',
      },
      minHeight: {
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}