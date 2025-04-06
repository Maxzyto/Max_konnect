/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('/public/pngwing.com.png')",
      },
    },
  },
  plugins: [forms],
};

