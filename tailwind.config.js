/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        absolute: {
          black: "#000000",
          white: "#ffffff",
        },
        primary: {
          60: "#CAFF33",
          65: "#D1FFAC",
          70: "#D8FF66",
          80: "#E5FF99",
          90: "#F2FFCC",
          95: "#F8FFE5",
          97: "#FBFFF0",
          99: "#FEFFFA",
        },
        gray: {
          10: "#191919",
          11: "#1C1C1C",
          15: "#262626",
          20: "#333333",
          30: "#4C4CAD",
          35: "#59595A",
          40: "#656567",
          60: "#98989A",
          70: "#B3B3B3",
          75: "#BFBFBF",
        },
      },
      backgroundImage: {
        headerBg: "url('assets/images/abstract01.svg')",
      },
      screens: {
        xl: "1990",
        lg: "1024px",
        md: "768px",
        sm: "390px",
      },
    },
  },
  plugins: [],
};
