
// tailwind.config.js
import Theme from './Constant/Theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Colors from your theme
      colors: {
        primary: {
          50: Theme.colors.primary[50],
          100: Theme.colors.primary[100],
          200: Theme.colors.primary[200],
          300: Theme.colors.primary[300],
          400: Theme.colors.primary[400],
          500: Theme.colors.primary[500],
          600: Theme.colors.primary[600],
          700: Theme.colors.primary[700],
          800: Theme.colors.primary[800],
          900: Theme.colors.primary[900],
          main: Theme.colors.primary.main,
          light: Theme.colors.primary.light,
          dark: Theme.colors.primary.dark,
          contrast: Theme.colors.primary.contrast,
        },
        secondary: {
          50: Theme.colors.secondary[50],
          100: Theme.colors.secondary[100],
          200: Theme.colors.secondary[200],
          300: Theme.colors.secondary[300],
          400: Theme.colors.secondary[400],
          500: Theme.colors.secondary[500],
          600: Theme.colors.secondary[600],
          700: Theme.colors.secondary[700],
          800: Theme.colors.secondary[800],
          900: Theme.colors.secondary[900],
          main: Theme.colors.secondary.main,
          light: Theme.colors.secondary.light,
          dark: Theme.colors.secondary.dark,
          contrast: Theme.colors.secondary.contrast,
        },
        neutral: Theme.colors.neutral,
        success: Theme.colors.success,
        warning: Theme.colors.warning,
        error: Theme.colors.error,
        info: Theme.colors.info,
        background: Theme.colors.background,
        text: Theme.colors.text,
        border: Theme.colors.border,
      },
      
      // Rest of your configuration remains the same...
      fontFamily: Theme.typography.fontFamily,
      fontSize: {
        'xs': Theme.typography.fontSize.xs.md,
        'sm': Theme.typography.fontSize.sm.md,
        'base': Theme.typography.fontSize.base.md,
        'lg': Theme.typography.fontSize.lg.md,
        'xl': Theme.typography.fontSize.xl.md,
        '2xl': Theme.typography.fontSize['2xl'].md,
        '3xl': Theme.typography.fontSize['3xl'].md,
        '4xl': Theme.typography.fontSize['4xl'].md,
        '5xl': Theme.typography.fontSize['5xl'].md,
        '6xl': Theme.typography.fontSize['6xl'].md,
        '7xl': Theme.typography.fontSize['7xl'].md,
        '8xl': Theme.typography.fontSize['8xl'].md,
      },
      fontWeight: Theme.typography.fontWeight,
      lineHeight: Theme.typography.lineHeight,
      letterSpacing: Theme.typography.letterSpacing,
      spacing: Theme.spacing,
      borderRadius: Theme.borderRadius,
      boxShadow: Theme.shadows,
      screens: Theme.breakpoints,
      zIndex: Theme.zIndex,
      transitionDuration: Theme.transitions.duration,
      transitionTimingFunction: Theme.transitions.easing,
    },
  },
  plugins: [],
}