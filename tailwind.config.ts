import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Inter']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'sm': '500px',
        'md': [
          {'min': '668px', 'max': '767px'},
          {'min': '868px'}
        ],
        'lg': '1100px',
        'xl': '1400px',
      }
      // spacing: {
      //   px: "1px",
      //   '0': "0",
      //   '0.5': "0.125rem",
      //   '1': "0.25rem",
      //   '1.5': "0.375rem",
      //   '2.25rem': "0.5rem",
      //   '2.5': "0.625rem",
      //   '3': "0.75rem",
      //   '3.5': "0.875rem",
      //   '4': "1rem",
      //   '5': "1.25rem",
      //   '6': "1.5rem",
      //   '7': "1.75rem",
      //   '8': "2rem",
      //   '9': "2.25rem",
      //   '10': "2.5rem",
      //   '11': "2.75rem",
      //   '12': "3rem",
      //   '14': "3.5rem",
      //   '16': "4rem",
      //   '20': "5rem",
      //   '24': "6rem",
      //   '28': "7rem",
      //   '32': "8rem",
      //   '36': "9rem",
      //   '40': "10rem",
      //   '44': "11rem",
      //   '48': "12rem",
      //   '52': "13rem",
      //   '56': "14rem",
      //   '60': "15rem",
      //   '64': "16rem",
      //   '72': "18rem",
      //   '80': "20rem",
      //   '96': "24rem",
      //   "128": "32rem",
      //   "144": "36rem",
      // },
      // borderRadius: {
      //   'sm': "0.125rem",
      //   'md': "0.25rem",
      //   'lg': "1rem",
      //   'xl': "1.5rem",
      //   "2xl": "2rem",
      //   "3xl": "2.5rem",
      //   "4xl": "3rem",
      //   'full': '9999px',
      // },
      // screens: {
      //   sm: "480px",
      //   md: "768px",
      //   lg: "976px",
      //   xl: "1440px",
      // },
      // colors: {
      //   blue: "#1fb6ff",
      //   purple: "#7e5bef",
      //   pink: "#ff49db",
      //   orange: "#ff7849",
      //   green: "#13ce66",
      //   yellow: "#ffc82c",
      //   "gray-dark": "#273444",
      //   gray: "#8492a6",
      //   "gray-light": "#d3dce6",
      // },
      // fontFamily: {
      //   sans: ["Graphik", "sans-serif"],
      //   serif: ["Merriweather", "serif"],
      // },
    },
  },
};
export default config;
