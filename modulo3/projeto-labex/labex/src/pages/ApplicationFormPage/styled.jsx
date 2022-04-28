import styled from 'styled-components'

export const AppFormPageContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    min-height: 80vh;
    background-color: #151414;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
 
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
export const Select = styled.select`
    padding: 10px;
    border-radius:5px;
    border-radius:5px;
    border:none;
    outline: none;
`
export const Back = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    span{
        cursor: pointer;
        color:#18F2A4;
        font-size: 2rem;
        margin-left: 20px;
        :hover{
            opacity: 60%;
            box-shadow:1px 1px 2px black;
        }
    }
`