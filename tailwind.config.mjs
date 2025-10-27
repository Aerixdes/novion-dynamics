/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        novion: {
          blue: "#00A4FF",
          graphite: "#181818"
        }
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        '2xl': '1rem'
      }
    },
  },
  plugins: [],
}
