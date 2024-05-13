import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.cyan[900],
        },
        fg_primary: {
          DEFAULT: colors.cyan[50],
        },
        bg_light: {
          DEFAULT: colors.white,
        },
        fg_light: {
          DEFAULT: colors.gray[900],
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-members"),
    require("tailwindcss-mixins"),
    require("tailwindcss-signals"),
  ],
};
export default config;
