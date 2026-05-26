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
        surface:  'var(--bg)',
        content:  'var(--text)',
        subtle:   'var(--text-muted)',
        edge:     'var(--border)',
        accent:   'var(--accent)',
        navLink:  'var(--nav-link)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Raise text-xs from 12px → 13px; mono fonts render thinner and
        // 12px JetBrains Mono is below the WCAG practical legibility floor.
        xs: ['0.8125rem', { lineHeight: '1.125rem' }],
      },
    },
  },
  plugins: [],
};
