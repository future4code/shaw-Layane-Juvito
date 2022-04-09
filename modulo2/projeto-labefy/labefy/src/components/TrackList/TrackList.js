import React from 'react';
import { getPlaylistTracks, deleteTrackFromPlaylist, addTrackToPlaylist } from '../../services/requests';
import { TrackContainer, TrackIcon, TrackInfo, InputContainer, DeleteButton, MainContainer, Input, Button, ScrollContainer } from './styled';
import { RiMusicFill } from 'react-icons/ri';
import { TiPlus } from 'react-icons/ti';
import { FaTrashAlt } from 'react-icons/fa';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './styled.css';
import Loader from '../Loader/Loader';

export default class TrackList extends React.Component {
    state = {
        tracks: [],
        loading: true,
        inputArtistName: '',
        inputTrackUrl: '',
        inputTracktName: '',
    }
    componentDidMount() {
        getPlaylistTracks(this.props.id, this.savePlaylistTracks)
    }
    onChangeInputArtistName = (event) => {
        this.setState({
            inputArtistName: event.target.value
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
    addTrack = () => {
        addTrackToPlaylist(this.state.inputTracktName, this.state.inputArtistName, this.state.inputTrackUrl, this.props.id, this.saveData, this.savePlaylistTracks)
    }
    saveData = (name, url, artist) => {
        this.setState({
            inputArtistName: artist,
            inputTrackUrl: url,
            inputTracktName: name
        })
    }
    savePlaylistTracks = (data) => {
        this.setState({
            tracks: data,
            loading: false
        })
    }
    render() {
        let i = 0;
        const renderTracks = this.state.tracks.map((track) => {
            i++
            return (
                <TrackContainer key={track.id}>
                    <p>{i}</p>
                    <TrackIcon><RiMusicFill /></TrackIcon>
                    <TrackInfo>
                        <h3>{track.name}</h3>
                        <h4>{track.artist}</h4>
                    </TrackInfo>
                    <AudioPlayer
                        src={track.url}
                        layout={"horizontal"}
                        showJumpControls={false}
                        customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
                    />
                    <DeleteButton onClick={() => deleteTrackFromPlaylist(this.props.id, track.id, this.savePlaylistTracks)}>
                        <FaTrashAlt />
                    </DeleteButton>
                </TrackContainer>
            )
        })



        return (
            <MainContainer>
                <InputContainer>

                    <Input
                        onChange={this.onChangeInputTrackName}
                        value={this.state.inputTracktName}
                        placeholder={'Nome da música'}
                    />
                    <Input
                        onChange={this.onChangeInputArtistName}
                        value={this.state.inputArtistName}
                        placeholder={'Nome da(o) artista'}
                    />
                    <Input
                        onChange={this.onChangeInputTrackUrl}
                        value={this.state.inputTrackUrl}
                        placeholder={'Url da música'}
                    />
                    <Button>
                        <TiPlus onClick={this.addTrack} />
                    </Button>

                </InputContainer>
                {
                    this.state.loading ?
                        <Loader />
                        :
                        <ScrollContainer>
                            {renderTracks}
                        </ScrollContainer>

                }
            </MainContainer>
        );
    }
}