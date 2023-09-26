import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        margin:0;
        padding:0;
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
      }

`;

export default GlobalStyles;
