/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        glass: 'rgba(255,255,255,0.08)'
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.12)'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
}
