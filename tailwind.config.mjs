/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'background-primary': '#1B031B',
        'text-primary': '#F5F5F5',
        
        // Accent colors
        'accent-violet': '#B316D5',
        'accent-pink': '#CD2373',
        'accent-pink-alt': '#EC509E',
        'accent-yellow': '#FFEE34',
        
        // Text colors
        'text-on-yellow': '#000000',
        'text-secondary': 'rgba(245, 245, 245, 0.8)',
        'text-muted': 'rgba(245, 245, 245, 0.6)',
        
        // Legacy colors (keeping for backward compatibility)
        'lights-off': '#1B031B',
        'violet': '#CF31ED',
        'pink': '#EC509E',
        'pumpkin': '#FFEE34',
        'off-white': '#F5F5F5',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        // Typography scale
        'h1': ['4rem', { lineHeight: '1.2', fontWeight: '700' }], // 64px
        'h2': ['3rem', { lineHeight: '1.3', fontWeight: '600' }], // 48px
        'h3': ['2.25rem', { lineHeight: '1.4', fontWeight: '600' }], // 36px
        'h4': ['1.5rem', { lineHeight: '1.5', fontWeight: '500' }], // 24px
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // 16px
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px
        'caption': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // 14px
        'button': ['1rem', { lineHeight: '1.5', fontWeight: '500' }], // 16px
      },
      spacing: {
        // Standard spacing units (multiples of 8px)
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
        '26': '6.5rem', // 104px
        '30': '7.5rem', // 120px
      },
      borderRadius: {
        'card': '16px',
        'button': '8px',
        'input': '4px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.4)',
        'glow-violet': '0 0 20px rgba(179, 22, 213, 0.3)',
        'glow-pink': '0 0 20px rgba(205, 35, 115, 0.3)',
        'glow-yellow': '0 0 20px rgba(255, 238, 52, 0.3)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(179, 22, 213, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(179, 22, 213, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
};
