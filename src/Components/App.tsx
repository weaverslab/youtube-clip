import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProvider } from '../Context/appContext';
import GlobalStyle from '../Styles/globalStyle';
import { theme } from '../Styles/theme';
import Home from './Home';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AppProvider>
      <Home />
    </AppProvider>
  </ThemeProvider>
);

export default App;
