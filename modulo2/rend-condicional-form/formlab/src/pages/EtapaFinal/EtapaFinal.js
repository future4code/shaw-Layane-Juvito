import React from "react";
import { ButtonHome, MainContainer, MensagemFinal, ContainerRespostas, ContainerButoes } from "../../style/StyleGlobalApp/StyleGlobalApp";


export default class EtapaFinal extends React.Component {
    state = {
        verRespostas:false
    }
    verRespostas = () =>{
        const resposta=!this.state.verRespostas
        this.setState({verRespostas:resposta})
    }
    render() {
        return (
            <MainContainer>

                <MensagemFinal>
                    <h3>O FORMULÁRIO ACABOU!</h3>
                    <p>Muito obrigado por participar! Entraremos em contato!</p>
                    {(this.state.verRespostas) ?
                    <ContainerRespostas>
                        <h4>Suas respostas:</h4>
                        {this.props.respostas.map((resposta,index)=>{
                            return(
                               <p key={index}>Pergunta {index+1}: {resposta}</p> 
                            )
                        })}
                    </ContainerRespostas>
                    :
                    <p></p>}
                    <ContainerButoes>
                        <ButtonHome onClick={this.props.voltarAoInicio}>Home</ButtonHome>
                        <ButtonHome onClick={this.verRespostas}>Ver respostas</ButtonHome>
                    </ContainerButoes>
                </MensagemFinal>
            </MainContainer>
        );
    }
}
