/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'lights-off': '#1B031B',
        'violet': '#CF31ED',
        'pink': '#EC509E',
        'pumpkin': '#FFEE34',
        'off-white': '#F5F5F5',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 