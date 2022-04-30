import styled from "styled-components"

export const CandidateImage = styled.div`
    height: 9vh;
    width: 9vh;
    border-radius: 50%;
    background: url(${props=>props.image});
    background-size: cover;
`
export const CandidateContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    border: 1px solid #303733;
    width: 80%;
    padding: 5px;
    /* border-radius: 40% 2px 2px 40%; */
    border-radius: 2px;
    
`
export const CandidateInfo = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    width: 80%;
    >p{
        padding: 10px;
    }
    button{
        cursor: pointer;
        padding: 10px 25px;
        background-color: #FF951A;
        border:none;
        outline: none;
        border-radius: 5px;
        font-weight: bold;
        :hover{
            opacity: 60%;
        }
    }
`