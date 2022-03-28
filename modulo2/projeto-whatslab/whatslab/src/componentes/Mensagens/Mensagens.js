import React from "react";
import styled from "styled-components";
import iconeDoubleCheck from "../../img/doublecheck.svg";


const MinhaMensagem = styled.div`
  display:flex ;
  justify-content:right;
  color:darkgray;
  font-size:16px;
  padding-right:0px;
  
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 12px;
  }
`
const Balao = styled.div`
  background-color: rgba(255, 166, 0, 0.281);
  padding:0px 20px;
  box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.75);
  border-radius:15px 15px 0px 20px;
  overflow-wrap:break-word;
  max-width: 250px;
  margin:10px;
  div{
    width:100%;
    display:flex;
    justify-content:flex-end;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    max-width:150px;
    font-size: 12px;
  }
`
const DoubleCheck = styled.img`
  position: relative;
  bottom:5px;
  right: -10px;
  height: 5px;
`
const MensagemDele = styled.div`
  display:flex ;
  justify-content:left;
  color:darkgray;
  font-size:16px;
  p{
    display:flex;
    flex-direction:column;
    padding:10px 20px ;
    background-color: rgba(23, 23, 23, 0.433);
    overflow-wrap:break-word;
    max-width: 250px;
    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
    border-radius:20px 15px 15px 0px;
  }
  span{
    color:orange ;
    opacity:60% ;
    font-weight:500;
    font-size:14px ;
    
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    p{
      font-size: 12px;
      max-width: 150px;
    }
  }
`
const MensagemExcluida = styled.p`
  color:darkgray;
  font-size:12px;
  font-weight:bold;
`
export default class Mensagens extends React.Component {
  render() {


    let renderizarMensagem

    if (this.props.mensagem.nome.toUpperCase().trim() === "EU") {

      if (this.props.mensagem.texto === "excluida") {
        renderizarMensagem = <MinhaMensagem>
          <Balao>
            <MensagemExcluida>
              Mensagem Excluída
            </MensagemExcluida>
          </Balao>
        </MinhaMensagem>
      } else {
        renderizarMensagem = <MinhaMensagem
          // evento que captura o clique duplo se for 1 é clique simples, 2 o duplo
          onClick={
            event => {
              if (event.detail === 2) {
                this.props.onDbClickFuncao(this.props.id)
              
              }
            }
          }
        // evento que captura o clique direito do mouse
        // onMouseDown={
        //   event => {
        //     if (event.buttons == 2) {
        //       this.props.onDbClickFuncao(this.props.id)
        //     }
        //   }
        // }
        >
          <Balao>
            <p>{this.props.mensagem.texto}</p>
            <div>
              <DoubleCheck src={iconeDoubleCheck} />
            </div>
          </Balao>
        </MinhaMensagem>
      }

    } else {
      if (this.props.mensagem.texto === "excluida") {
        renderizarMensagem = <MensagemDele>
          <MensagemExcluida>
            Mensagem Excluída
          </MensagemExcluida>
        </MensagemDele>
      } else {
        renderizarMensagem = <MensagemDele
          onClick={
            event => {
              if (event.detail === 2) {
                this.props.onDbClickFuncao(this.props.id)
              }
            }
          }
        >
          <p>
            <span>{this.props.mensagem.nome}</span>
            {this.props.mensagem.texto}</p>
        </MensagemDele>
      }
    }


    return (
      <div>
        {renderizarMensagem}
      </div>

    )
  }
}