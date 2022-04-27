import React from "react";
import { MainContainer, LogInContainer, Input, Button } from "./styled";

export class HomePage extends React.Component{
    state = {
        inputUser : ''
    }
    onChangeInputUser = (event) => {
        this.setState({inputUser:event.target.value}) 
    }
  

    render(){
        return(
            <MainContainer>
                <h1>Labefy, o melhor streaming de músicas do Brasil!!</h1>

                <LogInContainer>
                    <h3>Informe suas credenciais</h3>
                    <p>O usuário padrão é layane-bastos-shaw</p>
                    <p>Caso deseje visitar as playlists de outros usuários, informe a credencial abaixo</p>
                    <Input 
                        placeholder={'nome-sobrenome-turma'}
                        value={this.state.inputUser}
                        onChange={this.onChangeInputUser}
                    />
                    <Button onClick={()=>this.props.changeUser(this.state.inputUser)}>Acessar novo usuário</Button>
                </LogInContainer>
            </MainContainer>
        )
    }
}
