/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#CEF53D",
      },
      spacing: {
        body: "2rem",
      },
      padding: {
        body: "2rem",
      },
    },
  },
  plugins: [],
};
