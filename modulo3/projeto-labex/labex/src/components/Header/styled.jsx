import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: #5527B6;
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    img{
        cursor: pointer;
        height: 100%;
        margin-left:10px;
    }
    div{
        width: 20%;
        display: flex;
        justify-content: space-around;
        font-size: 1.2rem;
        font-weight: bold;

        p{
            cursor: pointer;
            :hover{
                color:#18F2A4;
            }
        }
    }
`