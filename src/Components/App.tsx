import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../Styles/globalStyle';
import { theme } from '../Styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div>hello world</div>
  </ThemeProvider>
);

export default App;
