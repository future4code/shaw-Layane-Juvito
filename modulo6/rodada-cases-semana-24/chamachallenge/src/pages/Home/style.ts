import styled from "styled-components"

export const HomeContainer = styled.div`
    height: 88vh;
    width: 100vw;
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 4rem;
    font-weight: 500;
    gap:10px;

    @media screen and (max-device-width : 800px) {
       font-size: 2rem;
    }
`
