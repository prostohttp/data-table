/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        violet: "#6D5BD0",
        green: "#007F00",
        red: "#D30000",
        dark: "#25213B",
        "violet-1": "#6E6893",
        "violet-2": "#8B83BA",
        "violet-3": "#C6C2DE",
        light: "#F2F0F9",
        "violet-bg": "#F4F2FF",
      },
      boxShadow: {
        table: "0px 0px 5px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
