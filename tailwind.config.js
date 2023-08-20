/** @type {import("tailwindcss").Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "menu": "#9ca3af",
        "menu-highlight": "#e5e7eb",
        "menu-shadow": "#4b5563",
        "menu-active": "#d1d5db",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".drag-none": {
          "-webkit-user-drag": "none",
          "-khtml-user-drag": "none",
          "-moz-user-drag": "none",
          "-o-user-drag": "none",
          "user-drag": "none",
        },
      });
    }),

    plugin(function ({ addComponents }) {
      addComponents({
        ".btn": {
          "border-width": "2px",
          "border-color": "#e5e7eb",
          "border-bottom-color": "#4b5563",
          "border-right-color": "#4b5563",
          "background-color": "#9ca3af",
          "user-select": "none",
          "&:active": {
            "border-top-color": "#4b5563",
            "border-left-color": "#4b5563",
            "border-bottom-color": "#e5e6eb",
            "border-right-color": "#e5e6eb",
          }
        },
        "panel": {
          "border-color": "#e5e7eb",
          "border-bottom-color": "#4b5563",
          "border-right-color": "#4b5563",
          "background-color": "#9ca3af",
        }
      });
    }),
  ],
};
