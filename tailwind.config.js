/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          navy: '#101b3d',
          blue: '#1f3c88',
          royal: '#4056a1',
          sky: '#8fa8ff',
          sand: '#f6f4f1',
          gold: '#f2c94c',
        },
      },
      boxShadow: {
        'glow': '0 20px 45px rgba(31, 60, 136, 0.18)',
      },
    },
  },
  plugins: [],
}