import { createTheme } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material/styles';

// Color palette for Konomee
const colors = {
  vibrantPurple: '#5400ff',  // (84,0,255) - primary emphasis
  deepBlue: '#3f40c0',       // (63,64,192) - secondary depth
  coolTeal: '#2a8080',       // (42,128,128) - balance
  freshGreen: '#15c040',     // (21,192,64) - growth/energy
  brightGreen: '#00ff00',    // (0,255,0) - highlight/accent
};

export const getTheme = (mode: PaletteMode) => createTheme({
  palette: {
    mode,
    primary: {
      main: colors.vibrantPurple,
      light: '#9d66ff',
      dark: '#3d00b3',
      contrastText: '#fff',
    },
    secondary: {
      main: colors.coolTeal,
      light: '#6eb3b3',
      dark: '#1a5959',
      contrastText: '#fff',
    },
    warning: {
      main: colors.freshGreen,
      light: '#66d973',
      dark: '#0d8029',
      contrastText: '#fff',
    },
    background: {
      default: mode === 'light' ? '#ffffff' : '#121212',
      paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
    },
    text: {
      primary: mode === 'light' ? '#1a1a1a' : '#ffffff',
      secondary: mode === 'light' ? '#4a4a4a' : '#b0b0b0',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      color: mode === 'light' ? colors.vibrantPurple : '#9d66ff',
    },
    h2: {
      color: mode === 'light' ? colors.deepBlue : '#7d7aff',
    },
    h3: {
      color: mode === 'light' ? colors.coolTeal : '#6eb3b3',
    },
    h6: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#3d00b3', // Dark shade of vibrant purple
          color: '#ffffff',
        },
      },
    },
  },
});
