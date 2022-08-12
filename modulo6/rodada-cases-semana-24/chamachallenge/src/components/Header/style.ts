import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 12vh;
    width: 100vw;
    background-color: #3b3b3b;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    padding: 10px;
    width: 400px;
    font-size: 1.2rem;
    background-color: transparent;
    color: white;
    border: 1px solid #bda2c63d;
    outline: none;
    border-radius: 5px 0 0 5px;
    @media screen and (max-device-width : 800px) {
        width: 70%;
        font-size: 1rem;
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 9px 15px;
    font-size: 1.6rem;
    background-color: whitesmoke;
    outline: none;
    border: none;
    border-radius: 0 5px 5px 0;
    color: #3b3b3b;
    :hover{
        opacity: 80%;
    }

    @media screen and (max-device-width : 800px) {
        font-size: 1.45rem;
    }
`

export const ButtonHistory = styled.button`
    position: absolute;
    right: 2rem;
    padding: 10px;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: #3b3b3b;
    border: 1px solid #bda2c63d;
    outline: none;
    border-radius: 50%;
    :hover{
        opacity:80%;
    }

    @media screen and (max-device-width : 800px) {
        position: fixed;
        top: 14vh;
        right: 1rem;
        background-color: #171616e4;
        color: white;
        font-size: 1rem;
    }
`