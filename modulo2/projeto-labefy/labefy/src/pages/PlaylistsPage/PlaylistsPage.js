import React from 'react';
import { getAllPlaylists, deletePlaylist, searchPlaylist } from '../../services/requests';
import { MainContainer, ScrollContainer, ListContainer, Header,InputContainer} from './styled';
import CardPlaylist from '../../components/CardPlaylist/CardPlaylist';
import {BiSearchAlt} from 'react-icons/bi'
import Loader from '../../components/Loader/Loader';

export default class PlaylistsPage extends React.Component {
    state = {
        playlists: [],
        inputSearch: '',
        filteredPlaylist: [],
        loading: true,
    }
    componentDidMount() {
        getAllPlaylists(this.saveAllPlaylists, this.props.headers)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.inputSearch !== this.state.inputSearch) {
            searchPlaylist(this.state.inputSearch, this.saveDataFilter,this.props.headers)
        }
    };
    saveAllPlaylists = (data) => {
        this.setState({ playlists: data,loading: false })
    }
    saveDeletePlaylist = (id) => {
        deletePlaylist(id, this.saveAllPlaylists, this.props.headers)
    }
    saveDataFilter = (data) => {
        this.setState({ filteredPlaylist: data })
    }
    onChangeSearch = (event) => {
        this.setState({ inputSearch: event.target.value })
    }
    render() {

        let renderPlaylists = this.state.playlists.map((playlist) => {
            return (
                <CardPlaylist
                    key ={playlist.id}
                    playlist={playlist}
                    goToDetailPage={this.props.goToDetailPage}
                    saveDeletePlaylist={this.saveDeletePlaylist}
                />
            )
        })

        if (this.state.inputSearch) {
            renderPlaylists = this.state.filteredPlaylist.map((playlist) => {
                return (
                    <CardPlaylist
                        playlist={playlist}
                        goToDetailPage={this.props.goToDetailPage}
                        saveDeletePlaylist={this.saveDeletePlaylist}
                    />)
            })
        }

        return (
            <MainContainer>
                <Header>
                    <h1>Playlists</h1>
                    <InputContainer>
                        <input placeholder={"Buscar playlist"} onChange={this.onChangeSearch} value={this.state.inputSearch} />
                        <span><BiSearchAlt /></span>
                    </InputContainer>
                </Header>
                {
                    this.state.loading ?
                    <Loader />
                    :
                    <ScrollContainer>
                        <ListContainer>
                            {renderPlaylists}
                        </ListContainer>
                    </ScrollContainer>
                }
            </MainContainer>
        );
    }
}
