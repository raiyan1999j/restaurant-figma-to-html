/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        "david":["David Libre", 'serif'],
        "inter":["Inter", 'sans-serif'],
      },
      backgroundImage:{
        "offerBg":"url(./public/offerBg.png)"
      },
      screens:{
        "laptop":{"min":"769px","max":"1024px"},
        "mobileL":{"min":"376px","max":"425px"},
        "tablet":{"min":"426px","max":"768px"},
        "mobileM":{"min":"321px","max":"375px"},
        "mobileS":{"min":"320px","max":"374px"}
      }
    },
  },
  plugins: [],
}