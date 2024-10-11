/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        purple: '#7E74BE',
        grayy: "#D9D9D9"
      }
    },
  },
  plugins: [],
}

