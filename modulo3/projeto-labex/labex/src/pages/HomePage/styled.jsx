import styled from 'styled-components'

export const HomePageContainer = styled.div`
    width: 100%;
    height: 80vh;
    background-color: #151414;
    display: flex;
    align-items: center;
    justify-content: space-around;
   
    h1{
        color: #18F2A4;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:2rem;
        button{
            cursor: pointer;
            padding:3% 5%;
            font-size: 1.1rem;
            background-color: #FF951A;
            outline:none;
            border: none;
            
            font-weight: bold;
            border-radius: 5px;
            :hover{
                background-color: #452ED1;
                color: white;
            }
        }
    }
    img{
        height: 50%;
    }
`