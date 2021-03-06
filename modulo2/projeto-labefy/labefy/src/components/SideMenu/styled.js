import styled from "styled-components";

export const MainContainer = styled.div`
    /* grid-area: sidebar; */
    background-color: black;
    color: #808080;
    display: flex;
    flex-direction:column;
    align-items:center ;
    gap:10px;
    padding: 10px;
    width: 220px;
`
export const MenuItems = styled.div`
    cursor: pointer;
    display: grid;
    grid-template-columns: 25% 75%;
    align-items: center;
    width: 80%;
    /* font-size: 1rem; */
    font-weight: bold;
    span{
        font-size: 1.5rem;
    }

    :hover{
        color: orange;
    }
`
export const Logo = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 80%;
    font-size: 1.5rem;
    margin: 20px 0px;
    color:orange;
`