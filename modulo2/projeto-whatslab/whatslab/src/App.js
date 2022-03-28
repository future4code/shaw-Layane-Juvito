import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Chat from "./componentes/Chat/Chat";
import Logo from "./componentes/Logo/Logo";

const GlobalStyle = createGlobalStyle`

  *::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }
  *::-webkit-scrollbar-thumb {
      background-color: orange;
      opacity:40%;
  }
  *::-webkit-scrollbar-track {
      background: transparent;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    *::-webkit-scrollbar {
      width: 1px;
      height: 1px;
  }
  }
`
const ContainerApp = styled.div`
  width:100vw;
  height:100vh;
  padding:10px 30px;
  margin:0px;
  box-sizing:border-box;
  background-color:rgba(15, 15, 15, 0.986);
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
  header{
    color:white;
    padding:10px;
    font-size:20px;
  }
`

export default class App extends React.Component {
  render() {
    return (
      <ContainerApp>
        <GlobalStyle />
        <header>
          <Logo />
        </header>
        <Chat />
      </ContainerApp>
    )
  }
}
