import styled from "styled-components";


export const FooterContainer = styled.div`
    height: 10vh;
    background-color: #5527B6;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    color:white;
    padding-right: 20px;
    gap:20px;
    
    p{
        text-align: center;
        width:100% ;
    }
    div{
        display: flex;
        align-items: center;
        
        gap:20px;
        a{
            display: flex;
            align-items: center;
            text-decoration:none;
            color:white;
            font-size: 2rem;
        }
    }
`