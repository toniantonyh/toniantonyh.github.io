export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,svg}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Roboto Condensed"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'
        ]
      },
      colors: {
        'brand-red': {
          DEFAULT: 'oklch(63.32% 0.292 28.6)'
        },
        dark: {
          DEFAULT: '#111111'
        }
      },
      screens: {
        'xs': '30rem'
      },
      spacing: {
        '18': '4.5rem',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}

