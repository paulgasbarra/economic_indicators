import { useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import type { PaletteMode } from '@mui/material';
import { getTheme } from './theme';
import HomePage from './components/HomePage';

function App() {
  const [mode, setMode] = useState<PaletteMode>('light');

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage mode={mode} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
