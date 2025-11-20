/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4B0055",
          light: "#7A1B84",
          dark: "#2B0033",
        },
        crown: "#C0C0C0",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Space Grotesk",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        brand: "0 25px 80px rgba(43, 0, 51, 0.15)",
      },
      backgroundImage: {
        "hero-noise":
          "radial-gradient(circle at top, rgba(255,255,255,0.25), transparent 60%), radial-gradient(circle at 20% 20%, rgba(122,27,132,0.4), transparent 55%)",
      },
    },
  },
  plugins: [],
};
