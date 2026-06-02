// /Users/entheos/Documents/Backyard Bounty/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Bitter"', 'serif']
      },
      colors: {
        scene: {
          sky: 'var(--scene-sky)',
          sun: 'var(--scene-sun)',
          field: 'var(--scene-field)',
          plant: 'var(--scene-plant)',
          text: 'var(--scene-text)',
          bg: 'var(--scene-bg)'
        }
      },
      backgroundColor: {
        scene: {
          bg: 'var(--scene-bg)'
        }
      },
      textColor: {
        scene: {
          text: 'var(--scene-text)'
        }
      },
      borderColor: {
        scene: {
          border: 'var(--scene-text)'
        }
      },
      maxHeight: {
        96: '24rem'
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding'
      }
    }
  },
  plugins: []
}
