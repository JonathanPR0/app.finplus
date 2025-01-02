import { colors } from "./src/styles/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: [
          "Poppins-Regular", // Fonte padrão
          "system-ui", // Fonte de fallback
        ],

        poppins: {
          black: "Poppins-Black",
          bold: "Poppins-Bold",
          extrabold: "Poppins-ExtraBold",
          extralight: "Poppins-ExtraLight",
          italic: "Poppins-Italic",
          light: "Poppins-Light",
          medium: "Poppins-Medium",
          regular: "Poppins-Regular",
          semibold: "Poppins-SemiBold",
          thin: "Poppins-Thin",
        },
      },
    },
  },
  plugins: [],
};
