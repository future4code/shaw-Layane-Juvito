import React from 'react';
import TrackList from '../../components/TrackList/TrackList';
import { MainContainer, PlaylistImg, InputPlaylist, InputContainer, SaveButton,MessageContainer } from './styled';
import { FaMusic } from 'react-icons/fa';
import { createPlaylist } from '../../services/requests';

export default class CreatePlaylistPage extends React.Component {
    state = {
        inputPlaylistName: '',
        inputArtistName: '',
        inputTrackUrl: '',
        inputTracktName: '',
        currentPlaylistId: '',
        currentPlaylistName: 'Minha Playlist',
        edit: true,
        trackList:'',
        showPlaylist:false
    }
    onChangeInputPlaylistName = (event) => {
        this.setState({
            inputPlaylistName: event.target.value,
            currentPlaylistName: event.target.value,
        })

    }
    onChangeInputTrackName = (event) => {
        this.setState({
            inputTracktName: event.target.value
        })
    }
    onChangeInputTrackUrl = (event) => {
        this.setState({
            inputTrackUrl: event.target.value
        })
    }
    saveData = (data) => {
        this.setState({
            inputPlaylistName: data,
            edit:!this.state.edit,
            
        })
    }
    saveId = (data) => {
        this.setState({
            currentPlaylistId: data,
            showPlaylist:true
        })
    }
    editPlaylist = () => {
        this.setState({
            edit:!this.state.edit
        })
    }
    render() {
        console.log(this.state.currentPlaylistId)
        return (
            <MainContainer>
                <header>
                    <PlaylistImg>
                        <FaMusic />
                    </PlaylistImg>
                    <InputContainer>
                        <p>PLAYLIST</p>
                        
                        {
                            this.state.edit ?
                            <div>
                                <InputPlaylist
                                    onChange={this.onChangeInputPlaylistName}
                                    value={this.state.inputPlaylistName}
                                    placeholder={'Nome da playlist'}
                                />
                                <SaveButton 
                                onClick={()=>createPlaylist(this.state.inputPlaylistName,this.saveData,this.saveId,this.props.headers)}>salvar</SaveButton>
                                <SaveButton onClick={this.editPlaylist}>cancelar</SaveButton>

                            </div>
                                :
                            <h1 onClick={this.editPlaylist}>
                                {this.state.currentPlaylistName}
                            </h1>
                        }
                    </InputContainer>

                </header>
                <main>
                    {
                        
                        this.state.showPlaylist ?
                        
                            <TrackList
                                id={this.state.currentPlaylistId}
                                headers = {this.props.headers}
                            />
                        :
                        <MessageContainer>
                            <p>Essa playlist ainda não possui músicas</p>
                        </MessageContainer>
                    }
                </main>
            </MainContainer>
        );
    }
}
