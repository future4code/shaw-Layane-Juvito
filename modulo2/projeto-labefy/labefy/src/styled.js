import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0px;
        padding:0px;
        box-sizing: border-box;
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