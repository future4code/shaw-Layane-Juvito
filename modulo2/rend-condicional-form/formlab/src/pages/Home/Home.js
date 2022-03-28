import React from "react";
import { MainContainer,Button } from "../../style/StyleGlobalApp/StyleGlobalApp";

export default class Home extends React.Component{
    render(){
        return (
            <MainContainer>
                <div>
                    <p>Olá, Vamos ao formulário?</p>
                    <Button onClick={this.props.irParaEtapaUm}>Simbora!</Button>
                </div>
            </MainContainer>
        )
    }
}