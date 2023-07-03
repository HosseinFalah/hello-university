/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/App/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Container/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Routes/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Styles/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      Vazir: ['Vazirmatn']
    },
    extend: {
      colors: {
        secondary: '#606060',
        primary: '#E75D2A'
      },
      backgroundColor: {
        secondary: '#DFDFDF',
        primary: {
          100: '#FACDBE',
          900: '#E75D2A'
        }
      }
    }
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],}