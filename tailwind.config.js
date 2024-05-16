/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
import animations from "@midudev/tailwind-animations";

// font @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

export default {
  dark: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [daisyui, animations],
  daisyui: {
    themes: ["light", "dark"],
  },
};
