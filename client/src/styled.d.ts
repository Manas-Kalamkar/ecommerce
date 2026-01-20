// src/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors:{
    heading:string,
    text:string,
    bg:string,
    footer_bg:string,
    black:string,
    helper:string,
    white:string,
    btn:string,
    hr:string,
    shadowSupport:string,
    gradient:string,
    shadow:string,
    border:string,
  },
  media:{
    tab:string,
    mobile:string
  }
  }
}