/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
     extend: {
      colors:{
        bg_dark_primary:"#000000",
        bg_light_primary:"#ffffff",
        text_dark_primary:"000000",
        text_gray_for_span:"#7f7f7f"
      },
     },
   },
   plugins: [],
 };