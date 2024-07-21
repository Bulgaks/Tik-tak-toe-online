/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 3 column, 30px grid
        "r3-7,5": "repeat(3, 30px)",
        "r3-1fr": "repeat(3, 1fr)",
      },
      lineHeight: {
        tight: "1.2",
      },
    },
  },
  plugins: [],
};
