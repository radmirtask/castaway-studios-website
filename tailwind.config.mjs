/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        'bahnschrift': ['Bahnschrift', 'system-ui', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'violet': {
          500: '#CF31ED',
        },
        'pink': {
          500: '#EC509E',
        },
        'pumpkin': {
          300: '#FFEE34',
        },
        'electric': '#B316D5',
        'hibiscus': '#CD2373',
        'dark': '#1B031B',
      },
      letterSpacing: {
        'wider': '1.6px',
      },
    },
  },
  plugins: [],
}; 