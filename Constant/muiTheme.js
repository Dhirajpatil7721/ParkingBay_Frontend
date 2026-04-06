// src/theme/muiTheme.js
import { createTheme } from '@mui/material/styles';
import Theme from '../Constant/Theme';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: Theme.colors.primary.main,
      light: Theme.colors.primary.light,
      dark: Theme.colors.primary.dark,
      contrastText: Theme.colors.primary.contrast,
    },
    secondary: {
      main: Theme.colors.secondary.main,
      light: Theme.colors.secondary.light,
      dark: Theme.colors.secondary.dark,
      contrastText: Theme.colors.secondary.contrast,
    },
    background: {
      default: Theme.colors.background.body,
      paper: Theme.colors.background.paper,
    },
    text: {
      primary: Theme.colors.text.primary,
      secondary: Theme.colors.text.secondary,
    },
  },
  typography: {
    fontFamily: Theme.typography.fontFamily.body.join(','),
    h1: { ...Theme.typography.heading.h1 },
    h2: { ...Theme.typography.heading.h2 },
    h3: { ...Theme.typography.heading.h3 },
    h4: { ...Theme.typography.heading.h4 },
    h5: { ...Theme.typography.heading.h5 },
    h6: { ...Theme.typography.heading.h6 },
  },
  breakpoints: {
    values: Theme.breakpoints,
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  shape: {
    borderRadius: parseInt(Theme.borderRadius.lg),
  },
  shadows: [
    'none',
    Theme.shadows.sm,
    Theme.shadows.base,
    Theme.shadows.md,
    Theme.shadows.lg,
    Theme.shadows.xl,
    Theme.shadows['2xl'],
  ],
});

export default muiTheme;