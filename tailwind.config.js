/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary":                "#ffffff",
        "surface":                   "#faf9f6",
        "surface-container":         "#efeeeb",
        "surface-container-low":     "#f4f3f1",
        "surface-container-highest": "#e3e2e0",
        "on-surface":                "#1a1c1a",
        "on-surface-variant":        "#50453c",
        "primary":                   "#674628",
        "primary-fixed":             "#ffdcc1",
        "on-primary-fixed":          "#2d1600",
        "primary-container":         "#825e3e",
        "on-primary-container":      "#ffdec4",
        "outline":                   "#82756b",
        "outline-variant":           "#d4c4b8",
      },
      borderRadius: { DEFAULT: "0.25rem", lg: "1rem", xl: "1.5rem", full: "9999px" },
      fontFamily:   { headline: ["Noto Serif"], body: ["Manrope"], label: ["Manrope"] },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
