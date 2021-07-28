module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        dark: "hsl(235, 21%, 11%)",
        light: "hsl(0, 0%, 98%)",
        borderLight: "hsl(233, 11%, 84%)",
        borderDark: "hsl(229, 8%, 39%)",
        darkTodo: "#25273C",
      },
      letterSpacing: {
        veryWide: "20px",
      },
      minWidth: {
        "20px": "20px",
      },
      minHeight: {
        "20px": "20px",
      },
      borderRadius: {
        half: "50%",
      },
      borderColor: {
        borderLight: "hsl(233, 11%, 84%)",
        borderDark: "hsl(229, 14%, 26%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
