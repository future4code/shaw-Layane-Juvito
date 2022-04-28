import styled from 'styled-components'

export const TripDetailsPageContainer = styled.div`
    width: 100%;
    min-height: 80vh;
    background-color: #151414;
    display: flex;
    flex-direction: column;
    align-items: center;
    color:white;
    padding: 20px;
    gap:20px;
`

export const TripImageContainer = styled.div`
    background: url(${props=>props.image});
    background-size: cover;
    height: 30vh;
    width: 25vw;
    border-radius: 10px;
    border: 2px solid #48433d;
`
export const TripContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:20px;
`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    gap:5px;
    border: 2px solid #18F2A4;
    border-radius: 10px;
    height: 30vh;
    width: 35vw;
    span{
        color:#18F2A4;
        font-size: 1.2rem;
    }
`
export const ConatinerInfos = styled.div`
    display: flex;
    gap:20px;
`
export const CandidatesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border: 2px solid #FF951A;
    border-radius: 10px;
    height: 35vh;
    width: 40vw;
    >p{
        border-bottom:1px solid #ff941a5f;
        width: 100%;
        text-align: center;
        padding: 10px;
    }
    >div{
        width: 100%;
        display: flex;
        align-items: center;
        gap:5px;
        overflow: auto;
        flex: none;
        flex-flow: column nowrap;
        overflow-y: scroll;
        height:80% ;
    }
`
export const ApprovedContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    border: 2px solid #452ED1;
    border-radius: 10px;
    height: 35vh;
    width: 40vw;
    >p{
        border-bottom:1px solid #442ed155;
        width: 100%;
        text-align: center;
        padding: 10px;
        
    }
    >div{
        width: 100%;
        display: flex;
        align-items: center;
        gap:5px;
        overflow: auto;
        flex: none;
        flex-flow: column nowrap;
        overflow-y: scroll;
        height:80% ;
        
    }
`
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

export const BackButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    span{
        cursor: pointer;
        color:#18F2A4;
        font-size: 2rem;
        :hover{
            opacity: 60%;
            box-shadow:1px 1px 2px black;
        }
    }
`
export const LoaderContainer = styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #151414;
`