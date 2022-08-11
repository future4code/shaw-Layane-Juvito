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
`

export const HomeMain = styled.div`
    height: 88vh;
    max-width: 100vw;
    display: flex;
    background-color: #171616e4;
    padding-left: 5rem;
`

export const InfosContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    color: whitesmoke;
    gap:20px;
    h1{
        text-transform: capitalize;
        font-weight: 200;
        text-align: center;
        padding: 1rem;
    }
`

export const Scroll = styled.div`
     display: flex;
     flex-direction: column;
    padding: 0 5rem;
    overflow-y: scroll;
    height: 88vh;
    width: 100%;
    flex-grow:1;

`
export const Infos = styled.div`
    border: 1px solid #bda2c63d;
    border-radius: 3rem;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap:20px;

`