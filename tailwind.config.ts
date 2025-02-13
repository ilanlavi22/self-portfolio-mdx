const { fontFamily } = require('tailwindcss/defaultTheme')
import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        adventor: ['var(--font-adventor)'],
        proxima: ['var(--font-proxima)']
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'theme-black': '#0D0D0D',
        'theme-dark-gray': '#1D1D1D',
        'theme-red': '#EB5939',
        'theme-gray': '#B7AB98',
        'theme-gray-shade': 'rgba(183, 171, 152, 0.56)'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
} satisfies Config

export default config
