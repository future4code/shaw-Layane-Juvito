import React from "react";
import iconeEnviar from "../../img/rocket_launch.svg";
import styled from "styled-components";
import Mensagens from "../Mensagens/Mensagens";


const ContainerChat = styled.div`
  height: 85%;
  min-width: 40%;
  max-width:60%;
  border:6px solid orange;
  background-color:rgba(34, 33, 33, 0.986);
  border-radius:10px;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center; 
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    max-width:95% ;
    min-width:90% ;
  }
  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    max-width:70% ;
    min-width:60% ;
  }
`
const ContainerMensagens = styled.div`
  height:95%;
  width: 90%;
  display:flex;
  flex-flow:column nowrap;
  justify-content:flex-end;
  padding:10px;
`
const ScrollContainer = styled.div`
  display:flex;
  overflow: auto;
  flex: none;
  flex-flow: column-reverse nowrap;
  overflow-y: scroll;
  height:100% ;
`
const ContainerInputs = styled.div`
  position:absolute;
  bottom:0px ;
  height:5%;
  min-width: 40%;
  max-width: 60%;
  display:grid;
  grid-template-columns:25% 58% 6%;
  background-color:rgba(24, 23, 23, 0.342);
  justify-content:center ;
  gap:5px ;
  padding: 20px;
  input{
    padding:10px;
    border-radius:5px;
    border:none;
    outline:none;
    background-color:rgb(43, 42, 41);
    font-size:16px;
    color:orange;
    ::-webkit-input-placeholder{
      font-size:16px;
      font-weight:bold ;
    }
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    padding:10px;
    max-width:95% ;
    min-width:90% ;
    input{
      font-size: 12px;
      ::-webkit-input-placeholder{
      font-size:12px;
    }
    }
  }
  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    max-width:70% ;
    min-width:60% ;
  }
`
const ImgEnviar = styled.img`
  cursor: pointer;
  height:80%;
  :hover{
    opacity:60%;
  }
`

export default class Chat extends React.Component {
  state = {
    mensagens: [],
    userInput: "",
    mensagemInput: "",
    enviado: false
  }

  onChangeUser = (event) => {
    this.setState({ userInput: event.target.value })
  }
  onChangeMensagem = (event) => {
    this.setState({ mensagemInput: event.target.value })
  }
  onClickButton = () => {
    const msgUser = {
      nome: this.state.userInput,
      texto: this.state.mensagemInput
    };
    const novaLista = [msgUser, ...this.state.mensagens,];
  
    this.setState({
      mensagens: novaLista,
      mensagemInput: "",
      enviado: true
    })
  }


  render() {

    let renderizarMensagens
    if (this.state.enviado) {
      const onDoubleClickMsg = (index) => {
        let excluir = window.confirm(`deseja excluir a mensagem: ${this.state.mensagens[index].texto}`);
        console.log("O array das mensagens foi atualizado, veja: ", this.state.mensagens);
        if (excluir) {
          const novoLista = [...this.state.mensagens]
          novoLista[index].texto = "excluida"
          this.setState({ mensagens: novoLista })
          this.state.mensagens.splice(index, 1)
        }
        
      }
      renderizarMensagens = this.state.mensagens.map((mensagem, index) => {
        return <Mensagens
          key={index}
          id={index}
          mensagem={mensagem}
          onDbClickFuncao={onDoubleClickMsg}
        />
      })
    }

    return (
      <ContainerChat>
        <ContainerMensagens>
          <ScrollContainer>
            {renderizarMensagens}
          </ScrollContainer>
        </ContainerMensagens>
        <ContainerInputs>
          <input
            value={this.state.userInput}
            onChange={this.onChangeUser}
            placeholder={"Usuário"}
          />
          <input
            value={this.state.mensagemInput}
            onChange={this.onChangeMensagem}
            placeholder={"Mensagem"}
            onKeyPress={event => {
              if (event.key === 'Enter' && this.state.mensagemInput !== "" && this.state.userInput !=="") {
                this.onClickButton()
              }
            }}
          />
          <ImgEnviar 
            src={iconeEnviar} 
            alt={"icone enviar"} 
            onClick={
              event => {
                if (event.detail === 1 && this.state.mensagemInput !=="" && this.state.userInput !=="" ) {
                  this.onClickButton()
                }
              }
            } />

        </ContainerInputs>
      </ContainerChat>
    )
  }
}
