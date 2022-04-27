import styled from 'styled-components'

export const AppFormPageContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.679);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    position: fixed;
    top:0;
`
export const FormContainer = styled.div`
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