/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#102040',
        secondary: '#007A4D',
        tertiary: '#C56C39',
        background: '#F9F7F2',
        charcoal: '#333333',
        success: '#34D399',
        warning: '#FBBF24',
        error: '#EF4444',
      },
      fontFamily: {
        headings: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        data: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      height: {
        '75vh': '75vh',
      },
      maxWidth: {
        'reading': '65ch',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
          },
        },
      },
    },
  },
  plugins: [],
};