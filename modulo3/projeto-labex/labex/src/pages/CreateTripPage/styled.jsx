import styled from 'styled-components'

export const AppFormPageContainer = styled.div`
   width: 100%;
    min-height: 80vh;
    background-color: #151414;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap:20px;
   
`
export const FormContainer = styled.form`
    display:flex;
    flex-direction:column ;
    gap:10px;
    width: 50%;
    background-color: #8877AB;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 3px 3px 20px black;
    span{
        text-align: left;
        font-size: 0.85rem;
    }
    h1{
        text-align: center;
    }
    button{
        align-self: center;
        cursor: pointer;
        padding: 10px 25px;
        border-radius: 5px;
        border: none;
        outline: none;
        font-weight: bold;
        box-shadow:1px 1px 1px black;
        background-color: #FF951A;
        :hover{
            box-shadow:1px 1px 5px black;
        }
    }
`

export const Input = styled.input`
    padding: 10px;
    border-radius:5px;
    border:none;
    outline: none;
`
export const BackButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    span{
        cursor: pointer;
        color:#18F2A4;
        font-size: 2rem;
        :hover{
            opacity: 60%;
        }
    }
`
export const LoaderContainer = styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #151414;
`