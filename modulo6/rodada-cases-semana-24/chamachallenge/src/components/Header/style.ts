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
`