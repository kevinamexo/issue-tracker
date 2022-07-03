/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "dashboard-sidebar": "1450px",
      },
    },
  },
  plugins: [],
};
