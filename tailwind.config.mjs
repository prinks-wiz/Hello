/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class', // toggled via JS by adding/removing .dark on <html>
  theme: {
    extend: {
      // Semantic tokens — all reference CSS variables defined in global.css.
      // Dark-mode switching works by swapping the variable values, not by
      // using Tailwind dark: variants, so every color automatically adapts.
      colors: {
        surface: 'var(--bg)',
        content: 'var(--text)',
        subtle:  'var(--text-muted)',
        edge:    'var(--border)',
        accent:  'var(--accent)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};
