/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffa9a3",
        secondary: "#f7567c",
        accent: "#ca9df2",
        neutral: "#2b1c2c",
        "base-100": "#f2f1f3",
        info: "#90d6e4",
        success: "#12542f",
        warning: "#d68205",
        error: "#fa1919",
      },
    },
  },
  plugins: [
    
  ],
};
