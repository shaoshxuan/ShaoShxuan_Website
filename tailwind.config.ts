import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        shaoBlack:'#121212',
        shaoWhite: '#F2F0EF',
        shaoPink: '#C41D62',
        shaoOrange: '#FFA060',
      }
    },
  },
  plugins: [],
};
export default config;
