import React from "react";
import styled from "styled-components";

const Borda = styled.div`
    border-radius:15px;
    border: solid 2px transparent;
    background-image: linear-gradient(white, white), linear-gradient(45deg,orange,rgb(228, 60, 161),blueviolet);
    background-origin: border-box;
    background-clip: content-box, border-box;
`
const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    gap:20px;
    padding: 30px;
    border-radius: 15px;
    

`
const ButtonsContainer = styled.div`
   display: flex;
   gap:5px;
`
const Inputs = styled.input`
    border:0.5px solid orange;
    border-radius:5px;
    outline: none;
    padding: 5px;
    color: rgb(228, 60, 161);
`
const Titulo = styled.label`
    color:blueviolet;
    font-weight: bold;
`
const Buttons = styled.button`
    border:2px solid darkblue;
    outline:none;
    padding:5px;
    border-radius: 5px;
    color:orange;
    font-weight: bold;
    font-size: 0.7rem;
    background-color:darkblue;

    :hover{
        border: 2px solid rgb(228, 60, 161);
        background-color: transparent;
        color: darkblue
    }

`

export default class UserRegistration extends React.Component {
    render() {
        return (
            <Borda>
               
                <RegisterContainer>
                    <Titulo>Cadastre-se</Titulo>
                        <Inputs
                            type = {'text'}
                            placeholder={'Nome do usuário'}
                            value={this.props.inputNameController}
                            onChange={this.props.onChangeInputName}
                        />
                    
                        <Inputs
                            type = {'email'}
                            placeholder={'Email do usuário'}
                            value = {this.props.inputEmailController}
                            onChange = {this.props.onChangeInputEmail}
                        />
                    <ButtonsContainer>
                        <Buttons onClick={this.props.addUser}>Cadastrar</Buttons>
                        <Buttons onClick={this.props.pageRoute}>Lista de usuários</Buttons>
                    </ButtonsContainer>
                </RegisterContainer>
                
            </Borda>
        )
    }
}