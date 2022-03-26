import React from "react";
import iconeEnviar from "./img/rocket_launch.svg";
import iconeDoubleCheck from "./img/doublecheck.svg"
import styled from "styled-components"

const ContainerApp = styled.div`
  width:100vw;
  height:100vh;
  padding:30px;
  margin:0px;
  box-sizing:border-box;
  background-color:rgba(15, 15, 15, 0.986);
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  header{
    color:white;
    
  }
`
const ContainerChat = styled.div`
  height: 100%;
  min-width: 30%;
  border:6px solid orange;
  background-color:rgba(34, 33, 33, 0.986);
  border-radius:10px;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center; 
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width:90% ;
  }
`
const ContainerMensagens = styled.div`
  height:95%;
  width: 90%;
  display:flex;
  flex-direction:column ;
  justify-content:flex-end ;
  padding:10px;
 

`
const MinhaMensagem = styled.div`
  display:flex ;
  color:darkgray;
  font-size:16px;
  justify-content:right;
  p{
    background-color: rgba(255, 166, 0, 0.281);
    padding:10px 25px;
    box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.75);
    border-radius:15px 15px 0px 15px;
    word-wrap: break-word;
    max-width: 80%;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 12px;
  }
`
const DoubleCheck = styled.img`
  position: relative;
  right: -15px;
  bottom: -5px;
  height: 5px;
`
const MensagemDele = styled.div`
  display:flex ;
  color:darkgray;
  font-size:16px;
  justify-content:left;
  p{
    display:flex;
    flex-direction:column;
    padding:10px 25px ;
    background-color: rgba(137, 43, 226, 0.329);
    word-wrap: break-word;
    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
    border-radius:15px 15px 15px 0px;
    max-width: 80%;
  }
  span{
    color:orange ;
    opacity:60% ;
    font-weight:500;
    font-size:14px ;
    
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 12px;
  }
`
const ContainerInputs = styled.div`
  height:5%;
  width:100% ;
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
    input{
      font-size: 12px;
      ::-webkit-input-placeholder{
      font-size:12px;
    }
    }
  }
`
const ImgEnviar = styled.img`
  cursor: pointer;
  height:80%;
  :hover{
    opacity:60%;
  }
`

export default class App extends React.Component {
  state = {
    mensagens: [],
    userInput: "",
    mensagemInput: "",
    enviado: false,
    id:0
  }
  
  onChangeUser = (event) => {
    this.setState({ userInput: event.target.value })
  }
  onChangeMensagem = (event) => {
    this.setState({ mensagemInput: event.target.value })
  }
  onClickButton = () =>{
    const msgUser = {
      id:this.state.id,
      nome: this.state.userInput,
      texto: this.state.mensagemInput
    };
    const novaLista = [...this.state.mensagens,msgUser];
    
    this.setState({
      mensagens:novaLista,
      mensagemInput:"",
      enviado:true,
      id:this.state.id+1
    })
  }
  onDoubleClick = (index) =>{
    
      this.state.mensagens.splice(index,1)
      console.log(this.state.id)
  }
  
  render() {
    let renderizarMensagem
    if(this.state.enviado){
      renderizarMensagem = this.state.mensagens.map((mensagem,index)=>{
        if(mensagem.nome.toUpperCase() === "EU"){
          return(
            <MinhaMensagem key={index}>
               <p>{mensagem.texto}
                <DoubleCheck src={iconeDoubleCheck} />
               </p>
            </MinhaMensagem>
          )
        } else {
          return(
            
            <MensagemDele key={index}>
              <p>
                <span>{mensagem.nome}</span>
                {mensagem.texto}</p>
            </MensagemDele>
          )
        }
      })
    }
    return (
      <ContainerApp>
        <header>
          <span>whats</span><span>Lab</span>
        </header>
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
