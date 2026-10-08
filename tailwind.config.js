/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand palette
        navy: {
          950: '#020818',
          900: '#050f2a',
          800: '#0a1a3e',
          700: '#0f2355',
          600: '#162d6b',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          glow: '#00e5ff',
        },
        neon: {
          green: '#00ff88',
          'green-dim': '#00cc6a',
          blue: '#00e5ff',
          purple: '#a855f7',
        },
        gold: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          glow: '#ffbf00',
        },
        glass: {
          white: 'rgba(255,255,255,0.05)',
          blue: 'rgba(0,229,255,0.08)',
          gold: 'rgba(251,191,36,0.08)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'stadium': "url('/stadium-bg.jpg')",
        'hero-gradient': 'linear-gradient(135deg, #020818 0%, #050f2a 40%, #0a1a3e 70%, #050f2a 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
        'cyan-glow': 'radial-gradient(ellipse at center, rgba(0,229,255,0.15) 0%, transparent 70%)',
        'gold-glow': 'radial-gradient(ellipse at center, rgba(251,191,36,0.15) 0%, transparent 70%)',
        'neon-gradient': 'linear-gradient(90deg, #00ff88, #00e5ff)',
        'gold-gradient': 'linear-gradient(90deg, #f59e0b, #fbbf24, #fcd34d)',
        'blue-gradient': 'linear-gradient(90deg, #0ea5e9, #22d3ee)',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0,229,255,0.4), 0 0 60px rgba(0,229,255,0.1)',
        'neon-green': '0 0 20px rgba(0,255,136,0.4), 0 0 60px rgba(0,255,136,0.1)',
        'neon-gold': '0 0 20px rgba(251,191,36,0.4), 0 0 60px rgba(251,191,36,0.1)',
        'card': '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
        'card-hover': '0 8px 40px rgba(0,229,255,0.15), inset 0 1px 0 rgba(255,255,255,0.12)',
        'glass': '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'radar': 'radar 2s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(0,229,255,0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0,229,255,0.6), 0 0 60px rgba(0,229,255,0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    // @tailwindcss/forms if available
  ],
}
