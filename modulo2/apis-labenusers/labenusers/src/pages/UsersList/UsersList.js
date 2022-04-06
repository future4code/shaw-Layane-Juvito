import React from "react";
import styled from "styled-components";
import UserDetail from "../UserDetail/UserDatail";
import Loader from "../../components/Loader";
import DeleteIcon from '../../lixeira.png';
import SearchIcon from '../../procurar.png';
import IconBack from '../../voltar.png';
import IconReload from '../../sincronizar.png';

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
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 90%;
        min-height: 70%;
    }
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
`
const ListItem = styled.div`
    display: grid;
    grid-template-columns:84% 15%;   
    align-items: center;
    justify-content: center;
    margin:5px;
    gap:2px;
    img{
        height: 1.8rem;
        cursor: pointer;
        :hover{
            filter:drop-shadow(2px 2px 2px orange)
        }
    }
`
const UserName = styled.p`
    cursor: pointer;
    border: 1px solid rgb(228, 60, 161);
    padding: 2px;
    font-size: 0.9rem;
    text-align: center;
    border-radius: 5px;
    color: darkblue;
    margin:0px;
    :hover{
        box-shadow: 1px 1px 5px orange;
    }
`
const Header = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 10% 10% 70% 10%;
    grid-template-rows: 25px;
    gap: 10px;
    padding-bottom: 5px;
    justify-content: center;
`
const Img = styled.img`
    cursor: pointer;
    height: 1.5rem;
    :hover{
            filter:drop-shadow(2px 2px 2px orange)
    }
`
const Inputs = styled.input`
    border:0.5px solid blueviolet;
    border-radius:5px;
    outline: none;
    padding: 5px;
    color: rgb(228, 60, 161);
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
                    <img src={DeleteIcon} onClick={() => { this.props.confirm(user.id) }} alt={'delete icon'}/>
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
                                <Header>
                                    <Img src={IconBack} onClick={this.props.pageRoute} />
                                    <Img src={IconReload} onClick={this.props.getAllUsers} />
                                    <Inputs 
                                        placeholder="Busca" 
                                        value = {this.props.inputSearchController}
                                        onChange = {this.props.onChangeInputSearch}
                                    />
                                    <Img src={SearchIcon} alt={'lupa'} onClick = {() => this.props.searchUsers()} />
                                </Header>

                                <ScroolContainer>

                                    {renderUsersList}

                                </ScroolContainer>
                            </MainContainer>
                            :
                            <UserDetail
                                user={this.props.user}
                                detailRouteChange={this.props.detailRouteChange}
                                deleteUser={this.props.confirm}
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