import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        custom: {
          "grayish-blue": "hsl(237, 18%, 59%)",
          "soft-red": "hsl(345, 95%, 68%)",
          white: "hsl(0, 0%, 100%)",
          "dark-desaturated-blue": "hsl(236, 21%, 26%)",
          "dark-blue": "hsl(235, 16%, 14%)",
          "black-blue": "hsl(234, 17%, 12%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
