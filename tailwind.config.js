/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        surface: '#0A0A0B',
        surface2: '#0F0F11',
        line: '#1A1A1D',
        ink: '#F2F2F3',
        muted: '#8A8A8F',
        faint: '#5C5C61',
        accent: '#22D3EE',
        accentDim: '#0E7490',
        route: '#F5A524',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, #14161c 1px, transparent 1px), linear-gradient(to bottom, #14161c 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
