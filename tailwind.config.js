/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00ffff',
          pink: '#ff00ff',
          purple: '#9d00ff',
          green: '#39ff14',
          orange: '#ff6600',
          blue: '#0099ff',
          yellow: '#ffff00',
        },
      },
      textColor: {
        'neon-cyan': '#00ffff',
        'neon-pink': '#ff00ff',
        'neon-purple': '#9d00ff',
        'neon-green': '#39ff14',
        'neon-orange': '#ff6600',
        'neon-blue': '#0099ff',
        'neon-yellow': '#ffff00',
      },
      borderColor: {
        'neon-cyan': '#00ffff',
        'neon-pink': '#ff00ff',
        'neon-purple': '#9d00ff',
      },
      boxShadow: {
        'neon-cyan': '0 0 10px rgba(0, 255, 255, 0.5)',
        'neon-pink': '0 0 10px rgba(255, 0, 255, 0.5)',
        'neon-purple': '0 0 10px rgba(157, 0, 255, 0.5)',
      },
    },
  },
  plugins: [],
}
