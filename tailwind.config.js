// tailwind.config.js

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      allura: ["Allura", "cursive"],
    },
  },
  plugins: [
    require("preline/plugin"),
    function ({ addBase, addUtilities, theme }) {
      // Function to add CSS variables for Tailwind colors
      let allColors = flattenColorPalette(theme("colors"));
      let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": newVars,
      });

      // Utility class to hide scrollbar
      const newUtilities = {
        ".scrollbar-none": {
          "scrollbar-width": "none",
          "-ms-overflow-style": "none" /* for IE11 */,
        },
        ".scrollbar-none::-webkit-scrollbar": {
          display: "none",
        },
      };

      addUtilities(newUtilities, {
        variants: ["responsive"], // Optionally, you can include variants
      });
    },
  ],
};
