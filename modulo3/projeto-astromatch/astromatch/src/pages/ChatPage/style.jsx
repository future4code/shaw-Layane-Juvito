import styled from "styled-components"

export const ContainerCP = styled.div`
  height: 90%;
  width:25rem;
  border:6px solid orange;
  background-color:rgba(34, 33, 33, 0.986);
  color:white;
  border-radius:10px;
  display: grid;
  grid-template-rows: 10% 83% 7%;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    max-width:95% ;
    min-width:90% ;
  }
`
export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid gray;
`
export const LogoIcon = styled.span`
    display: flex;
    font-size: 1.5rem;
    align-items: center;
    justify-content: center;
    width: 70%;
    color: #00e1ff;
    p{
        font-size: 2rem;
        text-align: center;
        color: #00e1ff; 
    }
    span{
        color: #eec06a;
        font-size: 2rem;
    }
`
export const MatchIcon = styled.span`
    cursor: pointer;
    font-size: 1.9rem;
    display: flex;
    align-items: center;
    padding-right: 5%;
    width: 15%;
    color: orange;
    span{
      display: flex;
      align-items: center;
      :hover{
        font-size: 1.7rem;
      }
    }
`
export const BackIcon = styled.span`
    cursor: pointer;
    font-size: 1.9rem;
    display: flex;
    align-items: center;
    padding-left: 5%;
    width: 15%;
    color: orange;
    span{
      display: flex;
      align-items: center;
      :hover{
        font-size: 1.7rem;
      }
    }
`
export const InputConatainer = styled.div`
    display: grid;
    grid-template-columns: 90% 10%;
    background-color: #3f3e3a22;
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        color:orange;
        
    }
    input{
        background-color: transparent;
        outline: none;
        border:none;
        padding:0% 5%;
        color:#00e1ff;
        font-size: 1.2rem;
        
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
      input{
        font-size: 1rem;
      }
      span{
        font-size: 1.4rem;
      }
    }
`
export const ContainerMensagens = styled.div`
  height:100%;
  width: 100%;
  display:flex;
  flex-flow:column nowrap;
  justify-content:flex-end;
  padding:10px;
`
export const ScrollContainer = styled.div`
  display:flex;
  overflow: auto;
  flex: none;
  flex-flow: column-reverse nowrap;
  overflow-y: scroll;
  height:100% ;
`