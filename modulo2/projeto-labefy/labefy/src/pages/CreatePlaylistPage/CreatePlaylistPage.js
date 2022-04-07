import React from 'react';
import axios from 'axios';
import { headers, baseUrl } from '../../constants/urls';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import AddTrackToPlaylist from '../../components/AddTrackToPlaylist/AddTrackToPlaylist';
toast.configure()
export default class CreatePlaylistPage extends React.Component {
    state = {
        inputPlaylistName: '',
        inputArtistName: '',
        inputTrackUrl: '',
        inputTracktName: '',
        currentPlaylistId:''
    }
    onChangeInputPlaylistName = (event) => {
        this.setState({
            inputPlaylistName: event.target.value
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
    createPlaylist = () => {
        const body = {
            'name': this.state.inputPlaylistName
        }
        axios.post(baseUrl, body, headers)
            .then(() => {
                this.searchPlaylist()
                this.setState({
                    inputPlaylistName: ''
                })
            })
            .catch((e) => {
                toast.error(e.response.data)
            })
    }
    searchPlaylist = () => {
        axios.get(`${baseUrl}/search?name=${this.state.inputPlaylistName}`, headers)
        .then((response)=>{
            this.setState({
                currentPlaylistId:response.data.result.playlist[0].id
            })
        })
        .catch((e)=>{
            console.log(e.response)
        })
    }
  
    render() {
        
        return (
            <div>
                <header>
                    <input
                        onChange={this.onChangeInputPlaylistName}
                        value={this.state.inputPlaylistName}
                        placeholder={'Nome da playlist'}
                    />
                    <button onClick={this.createPlaylist}>salvar</button>
                </header>
                
                <AddTrackToPlaylist 
                    playlistId = {this.state.currentPlaylistId}
                />
            </div>
        );
    }
}
