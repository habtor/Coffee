/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#F5F2EB",
        btnColor: "#E4D2A4",
        navColor: "#333335",
      },
    },
  },
  plugins: [],
};
