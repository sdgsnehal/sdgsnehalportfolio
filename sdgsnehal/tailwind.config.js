/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans"],
      },
      backgroundImage: {
        "hero-pattern": "url('../public/assets/snehal.webp')",
      },
    },
  },
  plugins: [],
};
