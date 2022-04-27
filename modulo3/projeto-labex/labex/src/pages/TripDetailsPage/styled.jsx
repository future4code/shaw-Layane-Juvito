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
    min-height: 30vh;
    width: 40vw;
    >p{
        border-bottom:1px solid #ff941a5f;
        width: 100%;
        text-align: center;
        padding: 10px;
    }
`
export const ApprovedContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    border: 2px solid #452ED1;
    border-radius: 10px;
    min-height: 30vh;
    width: 40vw;
    >p{
        border-bottom:1px solid #442ed155;
        width: 100%;
        text-align: center;
        padding: 10px;
    }
`
