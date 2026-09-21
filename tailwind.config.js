/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lab: {
          dark: {
            bg: '#080d1a',
            surface: '#0d1527',
            card: '#111b33',
            cardHover: '#162342',
            border: '#1e2d4f',
            borderLight: '#2a3e6d',
            text: '#f1f5f9',
            muted: '#94a3b8',
          },
          light: {
            bg: '#f8fafc',
            surface: '#ffffff',
            card: '#f1f5f9',
            cardHover: '#e2e8f0',
            border: '#cbd5e1',
            borderLight: '#e2e8f0',
            text: '#0f172a',
            muted: '#64748b',
          },
          cyan: {
            DEFAULT: '#00e5ff',
            dim: '#00b4d8',
            glow: 'rgba(0, 229, 255, 0.25)',
          },
          emerald: {
            DEFAULT: '#10b981',
            dim: '#059669',
            glow: 'rgba(16, 185, 129, 0.25)',
          },
          rose: {
            DEFAULT: '#f43f5e',
            dim: '#e11d48',
            glow: 'rgba(244, 63, 94, 0.25)',
          },
          amber: {
            DEFAULT: '#f59e0b',
            dim: '#d97706',
          },
          blue: {
            DEFAULT: '#3b82f6',
            dim: '#2563eb',
          }
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-cyan': 'glowCyan 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glowCyan: {
          '0%': { boxShadow: '0 0 5px rgba(0, 229, 255, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 229, 255, 0.7)' },
        }
      }
    },
  },
  plugins: [],
}
