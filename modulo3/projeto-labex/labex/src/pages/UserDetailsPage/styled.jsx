import styled from 'styled-components'

export const UserDetailsPageContainer = styled.div`
      width: 100%;
    min-height: 80vh;
    background-color: #151414;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap:20px;
   
`
export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
    min-width: 50%;
    max-width: 60%;
    background-color: #8877AB;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 3px 3px 20px black;
`
export const ContainerInfos = styled.div`
    display:flex;
    align-items: center;
    gap: 20px;
`
export const ContainerButtons = styled.div`
    display:flex;
    align-items: center;
    gap: 20px;
    button{
        cursor: pointer;
        padding: 5px 20px;
        border-radius: 5px;
        border: none;
        outline: none;
        font-weight: bold;
        box-shadow:1px 1px 1px black;
        background-color: #FF951A;
        :hover{
            box-shadow:1px 1px 5px black;
        }
    }
`
export const CandidateImage = styled.div`
    height: 15vh;
    width: 15vh;
    border-radius: 50%;
    background: url(${props=>props.image});
    background-size: cover;
    border: 1px solid #FF951A;
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap:10px;

    >span{
        color: #18F2A4;
        font-size: 1.5rem;
        font-weight: bold;
    }
`
export const Rigth = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
    border: 1px solid #49475a7d;
    padding: 10px;
    border-radius: 10px;
    span{
        color: #452ED1;
        font-weight: bold;
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