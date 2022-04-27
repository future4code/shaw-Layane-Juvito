import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *::-webkit-scrollbar {
    width: 4px;
  }
  *::-webkit-scrollbar-thumb {
      background-color: #00e1ff57;
      opacity:40%;
      border-radius: 2px;
  }
  *::-webkit-scrollbar-track {
      background: transparent;
  }

  *{
      margin:0px;
      padding:0px;
      box-sizing: border-box;
  }
`
export const ContainerApp = styled.div`
  width:100vw;
  height:100vh;
  background-color:rgba(15, 15, 15, 0.986);
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

`