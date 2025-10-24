export default {
  content: ["./index.html", "./src/**/*.{js,ts,html}"],
  theme: {
    extend: {
      colors: {
        epi: {
          900: "#123F2C",
          800: "#18533A",
          700: "#1F6F49",
          500: "#2E8A5E",
          300: "#5FB789",
          50: "#EAF5EF",
          purple: "#7A4B86"
        }
      },
      borderRadius: {
        pill: "999px"
      }
    }
  },
  plugins: []
}
