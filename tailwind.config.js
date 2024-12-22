/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main_bg": "rgba(34, 35, 41, 1)",
        "2E2F37_100": "rgba(46, 47, 55, 1)",
        "70D584": "rgba(112, 213, 132, 1)",
        "D9D9D9": "rgba(217, 217, 217, 1)",
        "FFFFFF_5": "rgba(255, 255, 255, 0.05)",
        "FFFFFF_10": "rgba(255, 255, 255, 0.1)",
        "1e1f24": "rgba(30, 31, 36, 1)",
        "3582F6": "rgba(53, 130, 246, 1)",
        "3582F6_20": "rgba(53, 130, 246, .2)"
      },
    },
  },
  plugins: [],
}