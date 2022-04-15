import React from "react";
import styled from "styled-components";
import IconBack from '../../voltar.png'

const Title = styled.h3`
    color: blueviolet;
    text-align: center;
    padding: 2px;
`
const Img = styled.img`
    cursor: pointer;
    height: 1.5rem;
    position: relative;
    left:0px;
    :hover{
            filter:drop-shadow(2px 2px 2px orange)
    }
`
const UserInformation = styled.p`
    color: darkblue;
    span{
        color:orange;
        font-weight: bold;
    }
`
const EditLabel = styled.label`
    width: 100%;
    color: darkblue;
    text-align: center;
    font-size: 0.8rem;
    font-weight: bold;
    border-top: 3px double rgb(228, 60, 161);
`
const SaveContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:5px;
    padding: 5px;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap:10px;
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        div{
            flex-direction: column;
        }
    }
`
const MainContainer = styled.div`
    width: 80%;
`
const Header = styled.div`
    display: grid;
    grid-template-columns: 10% 90%;
    align-items: center;
    border-bottom: 3px double rgb(228, 60, 161);
`
const Inputs = styled.input`
    border:0.5px solid orange;
    border-radius:5px;
    outline: none;
    padding: 5px;
    color: rgb(228, 60, 161);
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
    margin-left:10px;

    :hover{
        border: 2px solid rgb(228, 60, 161);
        background-color: transparent;
        color: darkblue
    }
`

export default class UserDetail extends React.Component {
    state = {
        renderizar: true,
        editando: false,
    }
    deleteUser = (id) => {
        this.props.deleteUser(id)
        this.props.detailRouteChange()
        this.setState({ renderizar: false })
    }
    editUser = () => {
        this.setState({ editando: true })
    }
    saveUser = (id) => {
        this.setState({ editando: false })
        this.props.editUser(id)
    }
    render() {
        return (
                <MainContainer>
                    <Header>
                        <Img src={IconBack} onClick={this.props.detailRouteChange} />
                        <Title>Detalhes do Usuário</Title>
                    </Header>
                    <UserInformation><span>Nome:</span> {this.props.user.name}</UserInformation>
                    <UserInformation><span>E-mail:</span> {this.props.user.email}</UserInformation>
                    <Buttons onClick={() => { this.deleteUser(this.props.user.id) }}>deletar usuário</Buttons>
                    {
                        !this.state.editando ?
                            <Buttons onClick={this.editUser}>editar</Buttons>
                            :
                            <SaveContainer>
                                <EditLabel>Editar usuário</EditLabel>
                                <div>
                                    <Inputs
                                        placeholder={"Nome"}
                                        value={this.props.inputNameController}
                                        onChange={this.props.onChangeInputName}
                                    />
                                    <Inputs
                                        placeholder={"E-mail"}
                                        value={this.props.inputEmailController}
                                        onChange={this.props.onChangeInputEmail}
                                    />
                                    <Buttons onClick={() => { this.saveUser(this.props.user.id) }}>Salvar</Buttons>
                                </div>
                            </SaveContainer>

                    }
                </MainContainer>
        )
    }
}