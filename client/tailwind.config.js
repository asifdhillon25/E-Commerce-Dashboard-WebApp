/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: 'class',

  theme: {
    extend: {
      /* =========================
         TYPOGRAPHY
      ========================= */
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace'],
      },

      /* =========================
         COLORS — AURORA SLATE
      ========================= */
      colors: {
        /* ---------- LIGHT MODE ---------- */
        light: {
          background: '#F7F8FA',
          surface: '#FFFFFF',
          surfaceMuted: '#F1F5F9',

          textPrimary: '#0F172A',
          textSecondary: '#475569',
          textMuted: '#94A3B8',

          primary: '#6366F1',          // Indigo accent
          primaryHover: '#4F46E5',

          accent: '#6366F1',
          accentSoft: '#EEF2FF',

          border: '#E5E7EB',

          success: '#16A34A',
          warning: '#D97706',
          error: '#DC2626',
        },

        /* ---------- DARK MODE ---------- */
        dark: {
          background: '#0B1220',
          surface: '#0F172A',
          surfaceMuted: '#111827',

          textPrimary: '#E5E7EB',
          textSecondary: '#94A3B8',
          textMuted: '#64748B',

          primary: '#818CF8',
          primaryHover: '#6366F1',

          accent: '#818CF8',
          accentSoft: '#1E1B4B',

          border: '#1E293B',

          success: '#22C55E',
          warning: '#F59E0B',
          error: '#EF4444',
        },
      },

      /* =========================
         RADIUS & SHADOWS
      ========================= */
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
      },

      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.05)',
        medium: '0 8px 24px rgba(15,23,42,0.08)',
      },

      /* =========================
         ANIMATION
      ========================= */
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      transitionDuration: {
        fast: '150ms',
        normal: '250ms',
      },
    },
  },

  plugins: [],
};
