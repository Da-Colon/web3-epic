module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ebony: "#555d50",
        black: "#0e0e0e",
        white: "#f1f1f1",
        red: "#ff343a",
        purple: "#40047b",
        yellow: "#ffd700",
        gray: "#aaaaaa",
      },
      boxShadow: {
        button: "1px 2px 5px rgb(0, 0, 0), 6px 6px 8px rgba(0, 0, 0, 0.5)",
        card: "1px 2px 5px rgba(255, 255, 255, 1), 2px 4px 7px rgba(255, 255, 255, 0.2)"
      },
      minWidth: {
        32: "8rem",
        20: "5rem",
        16: "4rem",
        24: "6rem",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
