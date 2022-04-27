import styled from 'styled-components'

export const TripsListPageContainer = styled.div`
    width: 100%;
    min-height: 80vh;
    background-color: #151414;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
    gap: 20px;

    input{
        padding: 10px;
        font-size: 1.1rem;
        width: 50vw;
        margin-bottom: 20px;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;
`
export const CardTest = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CardInfo = styled.div`
    display: grid;
    grid-template-columns:80% 20%;
    align-items: center;

    width: 50vw;
    height: 26vh;
    background-color: #303733;
    border: 1px solid #452ED1;
    border-left: none;
    padding: 0px 15px;
    -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    p{
        
    }
`
export const InfoText = styled.div`
    color:white;
    word-wrap: break-word;
    font-size: 1.1rem;
    margin-bottom: 5px;
    span{
        font-weight: bold;
        font-size: 1.2rem;
        color:#18F2A4;
    }
`
export const ImageContainer = styled.span`
    display: flex;
    align-items: top;
    justify-content: center;
    color:#FF951A;
    font-size: 2rem;
    -webkit-text-stroke: 0.5px black;
    width: 30vh;
    min-height: 30vh;
    background: url(${props => props.image});
    background-size: cover;
    border: 1px solid #FF951A;
    -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
`
export const Button = styled.div`
    cursor: pointer;
    border: 2px solid #452ED1;
    text-align: center;
    background-color: #452ED1;
    padding: 5px 10px;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    :hover{
        background-color: transparent;
        border: 2px solid #FF951A;
        color: #FF951A;
        
    }
    :active{
        background-color: #FF951A;
        border: 2px solid #FF951A;
        color: white;
    }
`