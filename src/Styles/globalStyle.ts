import * as styled from 'styled-components';

import reset from 'styled-reset';

const GlobalStyle = styled.createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  html,
  body {
    font-family: 'Metrophobic', sans-serif;
    color: ${(props) => props.theme.colors.text};
  }

  button {
    font-family: 'Metrophobic', sans-serif;
    border: none;
  }
`;

export default GlobalStyle;
