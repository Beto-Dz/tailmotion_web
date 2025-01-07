import tailmotion from "@betodz/tailmotion";
import theme from "./src/theme/theme";

const safelist = Object.keys(theme.animation).map((key) => `animate-${key}`);

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        tailwind: "url(/assets/tailwind.svg)",
      },
      gridTemplateRows: {
        "a-frc-a": "auto 1fr auto",
      },
    },
  },
  plugins: [tailmotion],
  safelist,
};
