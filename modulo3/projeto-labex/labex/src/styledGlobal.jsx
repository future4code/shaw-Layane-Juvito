import {createGlobalStyle} from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *::-webkit-scrollbar {
    width: 5px;
    }
    *::-webkit-scrollbar-thumb {
        background:linear-gradient(to top,#FF951A, #18F2A4, #5527B6);
        /* background-color: #5527B6; */
        /* opacity:10%; */
        border-radius: 2px;
    }
    *::-webkit-scrollbar-track {
        background: #151414;
    }

`