import styled from "styled-components"

export const ContainerMP = styled.div`
  height: 90%;
  width:25rem;
  border:6px solid orange;
  background-color:rgba(34, 33, 33, 0.986);
  border-radius:10px;
  display: grid;
  grid-template-rows: 10% 90%;

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
export const BackIcon = styled.span`
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
export const ReloadkIcon = styled.span`
    cursor: pointer;
    font-size: 1.9rem;
    display: flex;
    align-items: center;
    padding-left: 5%;
    color: orange;
    width: 15%;
    span{
      display: flex;
      align-items: center;
      :hover{
        font-size: 1.7rem;
      }
    }
`
export const ScrollContainer = styled.div`
  display:flex;
  overflow: auto;
  flex: none;
  flex-flow: column nowrap;
  overflow-y: scroll;
  height:100% ;
`