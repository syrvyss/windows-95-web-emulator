/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "menu": "#9ca3af",
        "menu-highlight": "#e5e7eb",
        "menu-shadow": "#4b5563",
        "menu-active": "#d1d5db"
      },
    }
  },
  plugins: [],
};
