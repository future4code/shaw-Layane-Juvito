import React from "react";
import { FaMusic } from 'react-icons/fa';
import { GoTrashcan } from 'react-icons/go';
import { PlaylistContainer,PlaylistImg, CardText,DeleteButton } from "./styled";

export default class CardPlaylist extends React.Component{
    render(){
        return(
            <PlaylistContainer key={this.props.playlist.id}  >
                    <PlaylistImg onClick={() => this.props.goToDetailPage(this.props.playlist)}>
                        <FaMusic />
                    </PlaylistImg>
                    <CardText>
                        <h3 onClick={() => this.props.goToDetailPage(this.props.playlist)}>{this.props.playlist.name}</h3>
                        <DeleteButton onClick={() => { this.props.saveDeletePlaylist(this.props.playlist.id) }}>
                            <GoTrashcan />
                        </DeleteButton>
                    </CardText>
                </PlaylistContainer>
        )
    }
}