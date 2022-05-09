import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #EDEDED;
    width: 100vw;
    height: 8vh;
;

`
export const Logo = styled.div`
    display: grid;
    grid-template-columns: repeat(2,auto);
    grid-template-rows: auto;

`
export const Orange = styled.div`
    background-color: #FE7E02;
    border-radius: 100% 0 0 0;
    height: 14px;
    width: 14px;

`
export const Gray = styled.div`
    background-color: #45525B;
    border-radius: 100% 0 0 0;
    height: 14px;
    width: 14px;
`
export const LightOrange = styled.div`
    background-color: #F9B24E;
    border-radius: 0 0 100% 0;
    height: 14px;
    width: 14px;

`
export const LightGray = styled.div`
    background-color: #A8BBC6;
    border-radius: 0 0 100% 0;
    height: 14px;
    width: 14px;
`