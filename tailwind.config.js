module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        10000: 10000,
      },
      height: {
        0.18: "0.18rem",
        pageHeightMinusHeader: "calc(100% - 8rem)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
