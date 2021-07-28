module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        dark: "hsl(235, 21%, 11%)",
        light: "hsl(0, 0%, 98%)",
      },
      letterSpacing: {
        veryWide: "20px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
