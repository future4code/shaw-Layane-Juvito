import styled from "styled-components";

export const Container = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 15px;
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
       flex-direction: column;
       width: 90%;
    }

`

export const Datas = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.9rem;
    padding-top: 5px;
    font-weight: 200;
    color: #cdc8c8c9;
    span{
        color: whitesmoke;
        font-weight: 200;
        font-size: 0.8rem;
    }
`

export const Name = styled.p`
    display: flex;
    align-items: center;
    gap:8px;
    font-size: 1.1rem;
    font-weight: 200;
    height: 100%;
    width: 20%;
    padding: 10px;
    border-right: 1px solid #bda2c63d;
    @media screen and (max-device-width : 800px) {
       border:none;
       width: 100%;
       border-bottom: 1px solid #bda2c63d;
    }
`

export const InfoContainer = styled.div`
    width: 80%;
`

export const Description = styled.p`
    border-bottom: 1px solid #bda2c63d;
    margin-bottom: 10px;
    padding-bottom: 10px;
    font-size: 0.9rem;
    @media screen and (max-device-width : 800px) {
       border:none;
    }
`

