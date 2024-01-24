/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#570FA0'
      },
      maxWidth: {
        'screen-xl-1366': '1366px',
      }
    },
  },
  plugins: [],
}

