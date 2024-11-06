/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(270deg, #335BE1 -16.88%, #03E7A3 178.81%)",
      },
    },
  },
  plugins: [],
};
