import styled from 'styled-components'

export const LoginContainer = styled.div`
    display:grid;
    justify-content: center; 
    grid-template-rows: 42% 58%;
    grid-template-columns: 100%;
    height: 100vh;
    width: 100vw;
`
export const MainContainer = styled.div`
    display:flex;
    align-items: start;
    justify-content: center;
    width: 100%;
`
export const CreatePostArea = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
`
export const Hr = styled.div`
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  height: 1px;
`