// src/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      btn: string;
      // add other colors here
    };
    media: {
      mobile: string;
    };
  }
}