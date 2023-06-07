/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryDarkBlue: "#343090",
        primaryBlue: "#5f59f7",
        primaryLightBlue: "#6592fd",
        primaryBlueSKy: "#44c2fd",
        primaryPurple: "#8c61ff",
        dark: "#05011a",
        secondaryGray: "#A5A4A4",
        secondaryLightGray: "#D3D3D1",
        secondaryDarkGray: "#635E5D",
      },
    },
  },
  plugins: [],
};
