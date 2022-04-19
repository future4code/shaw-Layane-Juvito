import styled from "styled-components";


export const MainContainer = styled.div`
    flex-grow:1;
    background-color: rgba(40, 37, 37, 0.948);
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    color:whitesmoke;
    h1{
        padding: 20px;
        text-align: center;
    }
`

export const LogInContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 70%;
    padding: 25px;
    border: 8px double orange;
    gap:30px;
`

export const Input = styled.input`
    padding: 10px;
    border:none;
    outline:none;
    border-radius:20px;
    background-color: rgba(11, 11, 11, 0.597);
    color:orange;
    ::-webkit-input-placeholder { 
        color:orange;
        padding: 10px;
    }
`
export const Button = styled.button`
    padding: 10px;
    border-radius: 20px;
    border:none;
    outline: none;
    color:orange;
    font-weight: bold;
    width: 50%;
    margin:auto;
    :hover{
        background-color: orange;
        color: whitesmoke;
    }
`