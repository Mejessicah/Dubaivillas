/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        'luxury': {
          gold: '#C6A87D',
          dark: '#1A1A1A',
          light: '#F5F5F5',
        }
      }
    },
  },
  plugins: [],
}