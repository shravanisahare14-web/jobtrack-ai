
/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],

  theme: {

    extend: {

      colors: {

        primary: "#A855F7",
        gold: "#F5B041",
        dark: "#050816",
        card: "#0F172A",
        border: "#1E293B",

      },

      boxShadow: {

        glow: "0 0 40px rgba(168,85,247,0.35)",

      },

    },

  },

  plugins: [],

}
