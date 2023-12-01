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
      },
      gridTemplateColumns: {
        fluidSmall: "repeat(auto-fit, minmax(10rem, 1fr))",
        fluidMedium: "repeat(auto-fit, minmax(15rem, 1fr))",
        fluid: "repeat(auto-fit, minmax(20rem, 1fr))",
        fluidLarge: "repeat(auto-fit, minmax(25rem, 1fr))",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        haken: ["var(--font-haken)"],
      },
    },
    colors: {
      primary: {
        1: "#6F4183",
        2: "#ffffff",
        3: "#FFFDF3",
        4: '#E3C948'
      },
      secondary: {
        1: "#18191F",
        2: "#3A3A3A",
        3: "#757575",
        4: "#474747",
        5: "#FFFBDD",
        6: "#7a7a7a",
      },
    },
    screens: {
      md: { max: "1024px" },
      tab: { max: "768px" },
      sm: { max: "500px" },
    },
  },
  plugins: [],
};
