/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      // If you’d like to preserve the default values for a theme option but also add new values
    },
    container: {
      center: true,
      padding: "1rem",
    }, //* centering by default
  },
  plugins: [],
};
