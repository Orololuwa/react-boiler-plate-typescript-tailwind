import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const GlobalStyles = createGlobalStyle`
    ${normalize()}
    *,
    *::after,
    *::before{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        transition: all 0.05s linear;
        width: 100%;
        height: 100vh;
        line-height: 2.1rem;
        font-family: ${({ theme }) => theme.primaryFont};
        font-style: normal;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyles;
