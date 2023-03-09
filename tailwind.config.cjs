/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins, sans-serif",
        "tilt-neon": "Tilt Neon, cursive",
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: ["@tailwindcss/forms", require("daisyui")],
};
