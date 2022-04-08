// import React from 'react';
import axios from 'axios';
import { headers, baseUrl } from '../../constants/urls';

export const getAllPlaylists = () => {
    axios.get(baseUrl, headers)
        .then((response) => {
            this.setState({
                playlists:response.data.result.list
            })
        })
        .catch((e) => {
            toast.error(e.response.data.message)
        })
}
export const deletePlaylist = (id) => {
    axios.delete(`${baseUrl}/${id}`, headers)
    .then(()=>{
        this.getAllPlaylists()
    })
    .catch((e)=>{
        toast.error(e.response.data.message)
    })
}
export const createPlaylist = () => {
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
export const searchPlaylist = () => {
    console.log(this.state.currentPlaylistName)
    axios.get(`${baseUrl}/search?name=${this.state.currentPlaylistName}`, headers)
    .then((response)=>{
        const list = [... response.data.result.playlist];
        let playlist = list.filter(element=>element.name===this.state.currentPlaylistName)
        this.setState({
            currentPlaylistId:playlist[0].id
        })
    })
    .catch((e)=>{
        console.log(e.response.data.message)
    })
}
export const addTrackToPlaylist = () =>{

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