import styled from "styled-components"

export const Main = styled.div`
    height: 88vh;
    max-width: 100vw;
    display: flex;
    background-color: #171616e4;
    padding-left: 5rem;
    @media screen and (max-device-width : 800px) {
       flex-direction: column;
       min-height: 88vh;
       align-items: center;
       height: fit-content;
       padding: 10px;
    }
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

    @media screen and (max-device-width : 800px) {
        align-items: center;
        height: fit-content;
        h1{
            font-size: 1.5rem;
        }
    }
`

export const Scroll = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 5rem;
    overflow-y: scroll;
    height: 88vh;
    width: 100%;

    @media screen and (max-device-width : 800px) {
       flex-grow: 1;
       overflow:visible;
       align-items: center;
       padding: 0;
       width: 100vw;
       height: fit-content;
    }

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
    @media screen and (max-device-width : 800px) {
       width: 95%;
       padding: 20px 5px;
       align-items: center;
       
    }
`