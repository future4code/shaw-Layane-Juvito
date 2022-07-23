import styled from 'styled-components'
import { lottoColors } from '../../theme/lottoColors'

export const HomeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    background-color: ${props => lottoColors[props.lotto]};
    overflow: hidden;
    @media screen and (max-device-width : 800px){
        flex-direction: column;
    }

`
export const LeftSide = styled.div`
    height: 100vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 92px 0;
    @media screen and (max-device-width : 800px){
        height: 50vh;
        width: 100vw;
        padding: 72px 0;
    }
`
export const Select = styled.select`
    width: 215px;
    height: 45px;
    border: none;
    outline: none;
    padding: 0 10px;
    border-radius: 5px;
`
export const LottoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    font-size: 30px;
    font-weight: 700;
    @media screen and (max-device-width : 800px){
        flex-direction: column;
    }
`

export const ContestInfo = styled.p`
    font-weight: 700;
`
export const ContestInfoContainer = styled.div`
    p{
        color: white;
        text-align: center;
    }
`
export const RightSide = styled.div`
    height: 100vh;
    width: 70vw;
    border-radius: 5% 0  0 5%/ 50%  0 0 50%;
    background-color: #EFEFEF;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    gap:1%;

    @media screen and (max-device-width : 800px){
        height: 50vh;
        width: 100vw;
        border-radius:  50% 50% 0   0  / 5% 5% 0    0 ;
    }
`

export const NumberContainer = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2%;
    @media screen and (max-device-width : 800px){
        width: 90%;
        overflow: auto;
        flex: none;
        flex-flow: row wrap;
        overflow-y: scroll;
        max-height:95%;
        border-radius:  50% 50% 0   0  / 5% 5% 0    0 ;
    }
`
export const NumberDiv = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: #FFFFFF;
    font-size: 27px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:2%;
    @media screen and (max-device-width : 800px){
        height: 70px;
        width: 70px;
        font-size: 20px;
    }
`

