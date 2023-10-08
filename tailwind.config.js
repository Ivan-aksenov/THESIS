/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      animation: {
        'animate-dot': 'animateDot 0.5s infinite alternate ease-in-out',
      },
      keyframes: {
        animateDot: {
          '0%' : { marginTop: '0px' },
          '100%': { marginBottom: '-20px' },
        }
      }
    },
  },
  plugins: [],
}