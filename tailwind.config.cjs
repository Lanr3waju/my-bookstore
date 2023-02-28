/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": "Poppins, sans-serif",
        "tilt-neon": "Tilt Neon, cursive"
      }
    },
  },
  plugins: ["@tailwindcss/forms"],
};
