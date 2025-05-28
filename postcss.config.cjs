// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},  // ← this is the new Tailwind v4 plugin
    autoprefixer: {},             // ← keep autoprefixer as-is
  },
}
