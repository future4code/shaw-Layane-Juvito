import styled from "styled-components";

export const HeaderContainer = styled.div`
    position: relative;
    height: 12vh;
    width: 100vw;
    background-color: #3b3b3b;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding-right: 2rem;
    @media screen and (max-device-width : 800px) {
        justify-content: space-around;
        padding: 0  1rem;
        gap: 1rem;
    }
`

export const Select = styled.select`
    padding: 10px;
    width: 400px;
    font-size: 1.2rem;
    background-color: transparent;
    color: white;
    border: 1px solid #bda2c63d;
    outline: none;
    border-radius: 5px;
    @media screen and (max-device-width : 800px) {
        width: 65%;
    }
`

export const Option = styled.option`
    color: #3b3b3b;
`

export const Button = styled.button`
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
`

export const DeleteButton = styled(Button)`
    position: absolute;
    top:center;
    right: 2rem;
    @media screen and (max-device-width : 800px) {
        position: relative;
        top:0;
        right: 0;
    }
`
export const CleanButton = styled(Button)`
    position: absolute;
    top:center;
    right: 6rem;
    @media screen and (max-device-width : 800px) {
        position:relative;
        top:0;
        right: 0;
    }
`
