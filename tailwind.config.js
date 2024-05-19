/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "lds-ring": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "slide-down-fade-in": {
          from: { opacity: "0", transform: "translateY(-3rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "lds-ring": "lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
        "slide-down-fade-in": "slide-down-fade-in 1s ease-out",
      },
      colors: {
        brand: "#ff0000",
      },
    },
  },
};
