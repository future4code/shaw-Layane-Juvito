import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    font-family: 'Roboto Flex', sans-serif;
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
*::-webkit-scrollbar {
        width: 4px;
    }
    *::-webkit-scrollbar-thumb {
        background: #171616e4;
        opacity:40%;
        border-radius: 2px;
    }
    *::-webkit-scrollbar-track {
        background: transparent;
    }
`