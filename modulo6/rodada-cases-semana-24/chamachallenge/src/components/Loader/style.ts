import styled from "styled-components";

export const LoaderContainer = styled.div`
    height: 88vh;
    width: 100vw;
    display: flex;
    align-items:center;
    justify-content:center;
    img{
        width: 5%;
    }
    @media screen and (max-device-width : 800px) {
        img{
            width: 15%;
        }
    }
`