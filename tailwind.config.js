// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",  // This line is important for React JSX
  ],
  theme: {
    extend: {
      // You can customize your colors for navy blue here if needed
      colors: {
        navy: '#1a2332',
      },
    },
  },
  darkMode: 'class', // Enabling class-based dark mode for theme toggle
  plugins: [],
}
