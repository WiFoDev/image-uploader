/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f0e17",
        headline: "#fffffe",
        parragraf: "#a7a9be",
        "button-text": "#fffffe",
        primary: "#ff8906",
        secondary: "#f25f4c",
        tertiary: "#e53170",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #ff8906 7.21%, #f25f4c 45.05%, #e53170 78.07%)",
      }),
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      content: {
        example: "url('../assets/brush.png')",
      },
      keyframes: {
        fadeInDown: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
          },

          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fadeInDown 0.5s ease-in",
      },
      boxShadow: {
        outer: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill,minmax(18rem,1fr))",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      standar: "90rem",
    },
  },
  plugins: [],
};
