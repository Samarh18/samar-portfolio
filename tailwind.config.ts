import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-white': '#F5F0E8',
        'near-black': '#1A1A18',
        'brand-red': '#C94B2A',
        'brand-amber': '#D4872A',
        'brand-green': '#3B6D11',
        'gray-mid': '#8A8880',
        'gray-light': '#E8E3D8',
      },
      fontFamily: {
        serif: ['DM Serif Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      maxWidth: {
        content: '760px',
        wide: '1000px',
      },
    },
  },
  plugins: [],
}

export default config
