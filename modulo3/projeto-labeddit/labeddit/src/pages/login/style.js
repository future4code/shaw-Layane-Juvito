import styled from 'styled-components'

export const LoginContainer = styled.div`

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    gap:10%;

`
export const LogoContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
export const Logo = styled.div`
    display: grid;
    grid-template-columns: repeat(2,auto);
    grid-template-rows: auto;

`
export const Orange = styled.div`
    background-color: #FE7E02;
    border-radius: 100% 0 0 0;
    height: 42px;
    width: 42px;

`
export const Gray = styled.div`
    background-color: #45525B;
    border-radius: 100% 0 0 0;
    height: 42px;
    width: 42px;
`
export const LightOrange = styled.div`
    background-color: #F9B24E;
    border-radius: 0 0 100% 0;
    height: 42px;
    width: 42px;

`
export const LightGray = styled.div`
    background-color: #A8BBC6;
    border-radius: 0 0 100% 0;
    height: 42px;
    width: 42px;
`

export const Title = styled.h3`
    color: #373737;
    font-size: 36px;
    font-weight: 700;
    line-height: 46.8px;
    margin-top: 11px;
`
export const SubTitle = styled.p`
    font-weight: 300;
    font-size: 16px;
    line-height: 21px;
`
export const Hr = styled.div`
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  height: 1px;
`
