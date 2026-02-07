/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "#090D14",
        panel: "#101826",
        ink: "#E5EDF9",
        muted: "#93A5C5",
        line: "#1E2A42",
        accent: "#52E3C2",
        accent2: "#5AA6FF"
      },
      fontFamily: {
        sans: ['"Sora"', "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 10px 40px rgba(82, 227, 194, 0.2)"
      }
    }
  },
  plugins: []
};
