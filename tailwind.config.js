module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        nav: "82px",
      },
      textColor: {
        black: {
          default: "#000814",
          primary: "#001D3D",
          lighter: "#003566",
        },
        yellow: {
          default: "#FFC300",
          light: "#FFD60A",
        },
      },
      colors: {
        black: {
          default: "#000814",
          primary: "#001D3D",
          lighter: "#003566",
        },
        yellow: {
          default: "#FFC300",
          light: "#FFD60A",
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
};
