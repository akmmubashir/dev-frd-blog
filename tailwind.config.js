/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "feature-gradient":
          "linear-gradient(180deg, rgba(0, 31, 78, 0.77) 0%, rgba(0, 4, 10, 0.77) 100%);",
        // "banner-gradient":
        //   "linear-gradient(89.74deg, rgba(0, 31, 78, 0.77) 0.21%, rgba(34, 37, 57, 0.77) 99.77%)",
        "btn-gradient":
          "linear-gradient(90.26deg,  #001F4E 1.73%, #17DFBA 97.58%)",
        "btn-hover-gradient":
          "linear-gradient(90.26deg,  #001F4E 9.58%, #183258 40.62%,rgba(30, 61, 102, 0.93) 62.31%, #17DFBA 97.58%)",
        "company-gradient":
          "radial-gradient(50% 50% at 50% 50%, rgba(55, 71, 79, 0.86) 0%, #37474F 100%)",
      },
    },
  },
  plugins: [],
};
