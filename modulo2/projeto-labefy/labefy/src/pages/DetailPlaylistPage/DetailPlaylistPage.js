import axios from 'axios';
import React from 'react';
import { baseUrl, headers } from '../../constants/urls';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

export default class DetailPlaylistPage extends React.Component {
   state = {
       tracks:[]
   }
    componentDidMount(){
        this.getPlaylistTracks()
    }
    getPlaylistTracks = () => {
        axios.get(`${baseUrl}/${this.props.id}/tracks`,headers)
        .then((response)=>{
            console.log(response.data.result.tracks)
            this.setState({
                tracks:response.data.result.tracks
            })
        })
        .catch((e)=>{
            toast.error(e.response.data.message)
        })
    }
    render() {
        const renderTracks = this.state.tracks.map((track) => {
            return(
                <div key={track.id}>
                    <h3>{track.name}</h3>
                    <h5>{track.artist}</h5>
                    <audio width="300" height="32" controls="controls" src={track.url} type="audio/mp3"></audio>
                </div>
            )
        })
       

        return (
            <div>
                {renderTracks}
            </div>
        );
    }
}
