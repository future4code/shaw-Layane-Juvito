import styled from 'styled-components'

export const LoginPageContainer = styled.div`
    width: 100%;
    height: 80vh;
    background-color: #151414;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const FormContainer = styled.form`
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    border: 3px solid #18F2A4;
    border-radius: 10px;
    padding: 10px;
    gap:5%;
    color: white;
    font-size: 1.5rem;
    input{
        border: 2px solid #FF951A;
        border-radius: 5px;
        padding: 10px;
        font-size: 1.1rem;
        outline:none;
    }
    button{
        padding:10px 20px;
        background-color: #18F2A4;
        color: #452ED1;
        font-weight: bold;
        font-size: 1.1rem;
        border: none;
        border-radius: 5px;

        :hover{
            background-color: #452ED1;
            color: #18F2A4;
        }
        
    }
`
