import React from 'react';
import {getAllPlaylists, deletePlaylist} from '../../services/requests';
import {PlaylistImg,MainContainer,PlaylistContainer,ScrollContainer,ListContainer,DeleteButton,CardText } from './styled';
import { FaMusic } from 'react-icons/fa';
import {GoTrashcan} from 'react-icons/go';

export default class PlaylistsPage extends React.Component {
    state = {
        playlists:[]
    }
    componentDidMount (){
        getAllPlaylists(this.saveAllPlaylists)
      }
    saveAllPlaylists = (data) => {
        this.setState({playlists:data})
    }
    saveDeletePlaylist = (id) => {
        deletePlaylist(id, this.saveAllPlaylists)
    }
    render() {
        const renderPlaylists = this.state.playlists.map((playlist)=>{
            return(
                <PlaylistContainer key={playlist.id}  >
                    <PlaylistImg onClick={()=>this.props.goToDetailPage(playlist)}>
                        <FaMusic />
                    </PlaylistImg>
                    <CardText>
                        <h3 onClick={()=>this.props.goToDetailPage(playlist)}>{playlist.name}</h3>
                        <DeleteButton onClick={()=>{this.saveDeletePlaylist(playlist.id)}}>
                            <GoTrashcan />
                        </DeleteButton>
                    </CardText>
                </PlaylistContainer>)
        })
        
        return (
            <MainContainer>
                <h1>Playlists</h1>
                
                <ScrollContainer>
                    <ListContainer>
                        {renderPlaylists}
                    </ListContainer>
                </ScrollContainer>
            </MainContainer>
        );
    }
}
