import React from 'react';
import { MainContainer } from './styled';
import TrackList from '../../components/TrackList/TrackList';
import {PlaylistImg,HeaderContainer } from './styled';
import { FaMusic } from 'react-icons/fa';

export default class DetailPlaylistPage extends React.Component {
    state = {
        tracks: [],
        trackList: ''
    }
    componentDidMount = () => {
        this.setState({ trackList: <TrackList id={this.props.id} /> })
    }
    renderTrackList = () => {
        this.setState({ trackList: <TrackList id={this.props.id} /> })
        console.log('entrou')
    }

    render() {


        return (
            <MainContainer>
                 <header>
                    <PlaylistImg>
                        <FaMusic />
                    </PlaylistImg>
                    <HeaderContainer>
                        <p>PLAYLIST</p>
                            <h1 >
                                {this.props.page.name}
                            </h1>
                    </HeaderContainer>

                </header>
                <main>
                    <TrackList id={this.props.page.id}/>
                </main>
            </MainContainer>
        );
    }
}
