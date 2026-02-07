/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "#080808",
        panel: "#121212",
        ink: "#F5F5F5",
        muted: "#A3A3A3",
        line: "#2A2A2A",
        accent: "#FFFFFF",
        accent2: "#D4D4D4"
      },
      fontFamily: {
        sans: ['"Sora"', "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 10px 40px rgba(255, 255, 255, 0.08)"
      }
    }
  },
  plugins: []
};
