module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        twitter: "#1DA1F2",
        telegram: "#0088CC",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
