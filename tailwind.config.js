/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/public/pngwing.com.png')",
        
    },
    },
  },
  plugins: [],
};

