import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    height: 10vh;
    p{
        color:white;
        font-size: 1.5rem;
    }
    :hover{
        background-color: #ffa60045;
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        p{
        font-size: 1.1rem;
        }
    }
`
export const Img = styled.img`
    border-radius: 50%;
    height: 60px;
    width: 60px;
    padding: 2%;
`