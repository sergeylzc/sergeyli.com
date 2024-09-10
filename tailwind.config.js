import { addDynamicIconSelectors } from "@iconify/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./css/input.css"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    addDynamicIconSelectors(),
    require('@tailwindcss/typography'),
  ],
}

