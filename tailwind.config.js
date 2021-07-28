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
      width: {
        "20px": "20px",
      },
      height: {
        "20px": "20px",
      },
      borderRadius: {
        half: "50%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
