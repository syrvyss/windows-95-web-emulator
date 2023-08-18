/** @type {import("tailwindcss").Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        menu: "#9ca3af",
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
  ],
};
