import React from "react";
import styled from "styled-components";
import UserDetail from "../UserDetail/UserDatail";
import Loader from "../../components/Loader";

const Border = styled.div`
    border-radius:15px;
    border: solid 2px transparent;
    background-image: linear-gradient(white, white), linear-gradient(45deg,orange,rgb(228, 60, 161),blueviolet);
    background-origin: border-box;
    background-clip: content-box, border-box;
    height: 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const MainContainer = styled.div`
    border-radius:15px;
    background-color: white;
    display: flex;
    flex-flow:column nowrap;
    align-items: center;
    padding: 10px;
    height: 80% ;
    width: 80%;
`

const ScroolContainer = styled.div`
    display:flex;
    overflow: auto;
    flex: none;
    flex-flow: column nowrap;
    overflow-y: scroll;
    height:100%;
    width: 100%;
    padding: 10px;
`
const ListItem = styled.div`
    display: grid;
    grid-template-columns:65% 35%;   
    align-items: center;
    gap:10px;
`
const UserName = styled.p`
    cursor: pointer;
    border: 1px solid rgb(228, 60, 161);
    padding: 2px;
    font-size: 0.9rem;
    text-align: center;
    border-radius: 5px;
    color: darkblue;
`
const Buttons = styled.button`
    cursor: pointer;
    border:2px solid darkblue;
    outline:none;
    padding:5px;
    border-radius: 5px;
    color:orange;
    font-weight: bold;
    font-size: 0.7rem;
    background-color:darkblue;
    margin-right: 5px;

    :hover{
        border: 2px solid rgb(228, 60, 161);
        background-color: transparent;
        color: darkblue
    }

`
const ReturnButton = styled.button`
    cursor: pointer;
    border:2px solid blueviolet;
    outline:none;
    padding:5px;
    border-radius: 5px;
    color:darkblue;
    font-weight: bold;
    font-size: 0.7rem;
    background-color:transparent;
    margin-right: 5px;

    :hover{
        border: 2px solid orange;
        background-color: transparent;
        color: darkblue
    }

`


export default class UsersList extends React.Component {
    render() {
        let renderUsersList
        renderUsersList = this.props.usersList.map((user) => {
            return (
                <ListItem key={user.id} >
                    <UserName onClick={() => this.props.getUserById(user.id)}>
                        {user.name}
                    </UserName>
                    <Buttons onClick={() => { this.props.deleteUser(user.id) }}>Exluir</Buttons>
                </ListItem>
            )
        })
        if (this.props.loading) {
            return <Loader />
        } else {
            return (
                <Border>

                    {
                        this.props.detailRoute ?
                            <MainContainer>
                                <ReturnButton onClick={this.props.pageRoute}>Retornar à página inical</ReturnButton>

                                <ScroolContainer>

                                    {renderUsersList}

                                </ScroolContainer>
                            </MainContainer>
                            :
                            <UserDetail
                                user={this.props.user}
                                detailRouteChange={this.props.detailRouteChange}
                                deleteUser={this.props.deleteUser}
                                onChangeInputName={this.props.onChangeInputName}
                                onChangeInputEmail={this.props.onChangeInputEmail}
                                inputNameController={this.props.inputNameController}
                                inputEmailController={this.props.inputEmailController}
                                editUser={this.props.editUser}
                            />
                    }
                </Border>
            )
        }
    }
}