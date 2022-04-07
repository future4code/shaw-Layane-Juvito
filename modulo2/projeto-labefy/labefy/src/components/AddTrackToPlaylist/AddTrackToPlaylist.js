import React from 'react';
import axios from 'axios';
import { headers, baseUrl } from '../../constants/urls';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
toast.configure()
export default class AddTrackToPlaylist extends React.Component {
    state = {
        inputArtistName: '',
        inputTrackUrl: '',
        inputTracktName: ''
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
    addTrackToPlaylist = () =>{

        const body = {
            "name": this.state.inputTracktName, 
            "artist": this.state.inputArtistName,
            "url": this.state.inputTrackUrl
        }
        console.log(body)
        axios.post(`${baseUrl}/${this.props.playlistId}/tracks`,body, headers)
        .then((response)=>{
            console.log(response.data)
            this.setState({
                inputArtistName: '',
                inputTrackUrl: '',
                inputTracktName: ''
            })
            toast.success('Música adicionada')
        })
        .catch((e)=>{
            toast.error(e.response.data.message)
        })
    }
    render() {
        return (
            <div>

                <input
                    onChange={this.onChangeInputTrackName}
                    value={this.state.inputTracktName}
                    placeholder={'Nome da música'}
                />
                <input
                    onChange={this.onChangeInputArtistName}
                    value={this.state.inputArtistName}
                    placeholder={'Artista'}
                />
                <input
                    onChange={this.onChangeInputTrackUrl}
                    value={this.state.inputTrackUrl}
                    placeholder={'Url'}
                />
                <button onClick={this.addTrackToPlaylist}>add</button>

            </div>
        );
    }
}
