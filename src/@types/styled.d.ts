import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      text: string;
      grey: string;
    };
    shadow: string;
  }
}
