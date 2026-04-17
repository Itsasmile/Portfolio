/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#0d0d0d',
        surface: '#141414',
        lifted:  '#1a1a1a',
        border:  '#242424',
        border2: '#2e2e2e',
        ink:     '#e6e3dc',
        muted:   '#787068',
        faint:   '#3a3530',
        gold:    '#c9a96e',
        'gold-dim': '#7a5f38',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans:    ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
