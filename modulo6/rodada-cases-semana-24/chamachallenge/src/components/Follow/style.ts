import styled from "styled-components";

export const Container = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px;
    gap:1rem;
    background-color: #171616e4;
    border-radius: 2rem;
    border: 1px solid #171616e4;
    color: whitesmoke;
    font-weight: 200;
    text-decoration: none;
    &:hover{
        opacity: 70%;
    }

    @media screen and (max-device-width : 800px) {
       width: 90%;
       font-size: 0.9rem;
    }

`
export const Image = styled.img`
    width: 35px;
    border-radius: 50%;
`