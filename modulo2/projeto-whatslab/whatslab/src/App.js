import React from "react";
import iconeEnviar from "./rocket_launch.svg";
import styled from "styled-components"

const ContainerApp = styled.div`
  width:100vw;
  height:100vh;
  padding:30px;
  margin:0px;
  box-sizing:border-box;
  background-color:rgba(15, 15, 15, 0.986);
  display: flex;
  align-items:center;
  justify-content:center;
`
const ContainerChat = styled.div`
  height: 100%;
  width: 30%;
  border:6px solid orange;
  background-color:rgba(34, 33, 33, 0.986);
  border-radius:10px;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center; 
`
const ContainerMensagens = styled.div`
  height:95%;
  width: 90%;
  display:flex;
  flex-direction:column ;
  justify-content:flex-end ;
  padding:10px;
 
  /* background-color:blue; */

`
const MinhaMensagem = styled.div`
  display:flex ;
  color:darkgray;
  font-size:25px;
  justify-content:right;
  p{
    background-color: rgba(255, 166, 0, 0.281);
    padding:30px ;
    box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.75);
    border-radius:5px;
    word-wrap: break-word;
    max-width: 80%;
  }
`
const MensagemDele = styled.div`
  display:flex ;
  color:darkgray;
  font-size:25px;
  justify-content:left;
  p{
    padding:30px ;
    background-color: rgba(137, 43, 226, 0.329);
    word-wrap: break-word;
    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
    border-radius:5px;
    max-width: 80%;
  }
  span{
    color:orange ;
    font-weight:bold;
    
  }
`
const ContainerInputs = styled.div`
  height:5%;
  width:100% ;
  display:grid;
  grid-template-columns:18% 68% 6%;
  background-color:rgba(24, 23, 23, 0.342);
  justify-content:center ;
  gap:20px ;
  padding: 20px;
  input{
    padding:10px;
    border-radius:5px;
    border:none;
    outline:none;
    background-color:rgb(43, 42, 41);
    font-size:25px;
    color:orange;
    ::-webkit-input-placeholder{
      font-size:25px;
      font-weight:bold ;
    }
  }
`
const ImgEnviar = styled.img`
  cursor: pointer;
  height:80%;
  :hover{
    
  }
`

export default class App extends React.Component {
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
  onClickButton = () =>{
    const msgUser = {
      nome: this.state.userInput,
      texto: this.state.mensagemInput
    };
    const novaLista = [...this.state.mensagens,msgUser];
    
    this.setState({
      mensagens:novaLista,
      mensagemInput:"",
      enviado:true
    })
    
  }
  render() {
    let renderizarMensagem
    if(this.state.enviado){
      renderizarMensagem = this.state.mensagens.map((mensagem,index)=>{
        if(mensagem.nome.toUpperCase() === "EU"){
          console.log(mensagem.nome)
          return(
            <MinhaMensagem key={index}>
               <p>{mensagem.texto}</p>
            </MinhaMensagem>
          )
        } else {
          return(
            
            <MensagemDele key={index}>
              <p><span>{mensagem.nome}</span>: {mensagem.texto}</p>
            </MensagemDele>
          )
        }
      })
    }
    return (
      <ContainerApp>
        <ContainerChat>
          <ContainerMensagens>
            {renderizarMensagem}
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
                if (event.key === 'Enter') {
                  this.onClickButton()
                }
              }}
            />
            <ImgEnviar src={iconeEnviar} alt={"icone enviar"} onClick={this.onClickButton} />
            
          </ContainerInputs>
        </ContainerChat>
      </ContainerApp>
    )
  }
}
