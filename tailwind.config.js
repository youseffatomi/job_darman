/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        body: "#fff",
      },
      container: {
        center: true,
        screens: {
          "2xl": "1170px",
        },
      },
    },
  },
};
