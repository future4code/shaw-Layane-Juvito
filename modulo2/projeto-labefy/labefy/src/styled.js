import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0px;
        padding:0px;
        box-sizing: border-box;
    }
    *::-webkit-scrollbar {
    width: 2px;
    height: 2px;
    }
    *::-webkit-scrollbar-thumb {
        background-color: orange;
        opacity:40%;
    }
    *::-webkit-scrollbar-track {
        background: transparent;
    }
`
export const MainContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    /* grid-template-columns: 210px 1fr;
    grid-template-rows: 100vh;
    grid-template-areas: "sidebar main" */
`