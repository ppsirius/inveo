import { createGlobalStyle } from "styled-components"
import theme from "./theme"

export const GlobalStyle = createGlobalStyle`
  body {
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${theme.fonts.quicksand};
    width: 100%;
    overflow-y: scroll;
  }

  .gatsby-image-wrapper {
    height: 100%;
  }
`
