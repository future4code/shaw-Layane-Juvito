import axios from 'axios';
import React from 'react';
import { baseUrl, headers } from '../../constants/urls';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MainContainer} from './styled'

toast.configure()

export default class PlaylistsPage extends React.Component {
    state = {
        playlists:[]
    }
    componentDidMount (){
        this.getAllPlaylists()
      }
    getAllPlaylists = () => {
        axios.get(baseUrl, headers)
            .then((response) => {
                this.setState({
                    playlists:response.data.result.list
                })
                // console.log(response.data.result.list)
            })
            .catch((e) => {
                toast.error(e.response.data.message)
            })
    }
    deletePlaylist = (id) => {
        axios.delete(`${baseUrl}/${id}`, headers)
        .then(()=>{
            // toast.success('Playlist deletada!')
            this.getAllPlaylists()
        })
        .catch((e)=>{
            toast.error(e.response.data.message)
        })
    }
    render() {
        const renderPlaylists = this.state.playlists.map((playlist)=>{
            return(
                <div key={playlist.id}>
                    <p onClick={()=>this.props.goToDetailPage(playlist.id)}>{playlist.name}</p>
                    <button onClick={()=>{this.deletePlaylist(playlist.id)}}>excluir</button>
                </div>)
        })

        return (
            <MainContainer>
                {renderPlaylists}
            </MainContainer>
        );
    }
}
