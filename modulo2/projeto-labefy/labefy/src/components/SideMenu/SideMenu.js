import React from "react";
import { MainContainer, MenuItems, Logo } from "./styled";
import {FaHome, FaSearch, FaPlusSquare, FaDiceD20} from 'react-icons/fa'
import {MdOutlineLibraryMusic} from 'react-icons/md'

export default class SideMenu extends React.Component{
    render(){
        return(
            <MainContainer>
                <Logo>
                    <FaDiceD20 />
                    <h3>LabeFy</h3>
                </Logo>
                <MenuItems onClick = {this.props.goToCreatePage}>
                    <FaHome />
                    Inicio
                </MenuItems>
                <MenuItems onClick = {this.props.goToDetailPage}>
                    <FaSearch />
                    Buscar
                </MenuItems>
                <MenuItems onClick = {this.props.goToPlaylistsPage}>
                    <MdOutlineLibraryMusic />
                    Sua Biblioteca
                </MenuItems>
                <MenuItems onClick = {this.props.goToCreatePage}>
                    <FaPlusSquare />
                    Criar playlist
                </MenuItems>

            </MainContainer>
        )
    }
}