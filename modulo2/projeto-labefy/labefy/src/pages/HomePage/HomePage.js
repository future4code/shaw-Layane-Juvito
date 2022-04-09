import React from "react";
import { changeUser } from "../../constants/urls";


export default class HomePage extends React.Component{
    state = {
        inputUser : ''
    }
    onChangeInputUser = (event) => {
        this.setState({inputUser:event.target.value})
    }
    render(){
        return(
            <div>
                <h1>Labefy, o melhor streaming de músicas do Brasil!!</h1>

                <div>
                    <label>Informe suas credenciais</label>
                    <input 
                        placeholder={'nome-sobrenome-turma'}
                        value={this.state.inputUser}
                        onChange={this.onChangeInputUser}
                    />
                    <button onClick={()=>changeUser(this.state.inputUser)}>Pegar minhas playlist</button>
                </div>
            </div>
        )
    }
}