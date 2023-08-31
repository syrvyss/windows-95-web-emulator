/** @type {import("tailwindcss").Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "comic": ["Comic Sans MS"]
      },
      colors: {
        "menu": "#bebebe",
        "menu-highlight": "#ffffff",
        "menu-shadow": "#555555",
        "menu-active": "#ffffff",
        "background-blue": "#008080",
        "title-bar-primary": "#000080",
        "title-bar-secondary": "#808080",
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

        ".dots": {
          "background-image":  "repeating-linear-gradient(45deg, #bebebe 25%, transparent 25%, transparent 75%, #bebebe 75%, #bebebe), repeating-linear-gradient(45deg, #bebebe 25%, #ffffff 25%, #ffffff 75%, #bebebe 75%, #bebebe)",
          "background-position": "0 0, 4px 4px",
          "background-size": "2px 2px",
        },
      });
    }),

    plugin(function ({ addComponents }) {
      addComponents({
        ".btn": {
          "border-width": "2px",
          "border-color": "#ffffff",
          "border-bottom-color": "#555555",
          "border-right-color": "#555555",
          "background-color": "#bebebe",
          "user-select": "none",
          "&:active": {
            "border-top-color": "#4b5563",
            "border-left-color": "#4b5563",
            "border-bottom-color": "#e5e6eb",
            "border-right-color": "#e5e6eb",
          },
        },
        ".btn-strong": {
          "border-width": "2px",
          "border-color": "#ffffff",
          "border-bottom-color": "#555555",
          "border-right-color": "#555555",
          "background-color": "#bebebe",
          "user-select": "none",
          "&:active": {
            "border-color": "#ffffff",
            "border-top-color": "#4b5563",
            "border-left-color": "#4b5563",
            "border-bottom-color": "#e5e6eb",
            "border-right-color": "#e5e6eb",
          },
        },
        ".panel": {
          "padding": "0.125rem",
          "border-width": "2px",
          "border-color": "#ffffff",
          "border-bottom-color": "#555555",
          "border-right-color": "#555555",
          "background-color": "#bebebe",
        },
      });
    }),
  ],
};
