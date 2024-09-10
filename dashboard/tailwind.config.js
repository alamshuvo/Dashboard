/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        "main-bg":"#f8f9fa",
        "button-bg":"#3bb77e",
        "dashboard-route-bg":"#d8f1e5"
      },
      fontFamily: {
        'Quicksand': [ "Quicksand",],
        "lato":[ "Lato"]
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

