// import React from 'react';
import axios from 'axios';
import { headers, baseUrl } from '../constants/urls'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
// =============================
// ===== REQUISIÇÕES GET =======

// ======Todas as Playlists=====
export const getAllPlaylists = (saveData) => {
    axios.get(baseUrl, headers)
        .then((response) => {
            saveData(response.data.result.list)
        })
        .catch((e) => {
            toast.error(e.response.data.message)
        })
}
// ======Todas as músicas de uma Playlists=====
export const getPlaylistTracks = (id,saveData) => {
    axios.get(`${baseUrl}/${id}/tracks`,headers)
    .then((response)=>{
        saveData(response.data.result.tracks)

    })
    .catch((e)=>{
        console.log(e)
        // toast.error(e.response.data.message)
    })
}
// ======Busca playlists por nome=====
export const searchPlaylist = (name,saveData) => {
    axios.get(`${baseUrl}/search?name=${name}`, headers)
    .then((response)=>{
        const list = [...response.data.result.playlist];
        let playlist = list.filter(element=>element.name===name)
        saveData(playlist[0].id)
    })
    .catch((e)=>{
        console.log(e.response.data.message)
    })
}
// ================================
// ===== REQUISIÇÕES DELETE =======
export const deletePlaylist = (id,saveData) => {
    axios.delete(`${baseUrl}/${id}`, headers)
    .then(()=>{
        getAllPlaylists(saveData)
    })
    .catch((e)=>{
        toast.error(e.response.data.message)
    })
}
export const deleteTrackFromPlaylist = (playlistId,trackId,saveData) => {
    axios.delete(`${baseUrl}/${playlistId}/tracks/${trackId}`, headers)
    .then(()=>{
        getPlaylistTracks(playlistId,saveData)
    })
    .catch((e)=>{
        toast.error(e.response.data.message)
    })
}

// ================================
// ===== REQUISIÇÕES POST =======
export const createPlaylist = (name,saveData,saveDataId) => {
    const body = {
        'name': name
    }
    axios.post(baseUrl, body, headers)
        .then(() => {
            searchPlaylist(name,saveDataId)
            saveData('')
        })
        .catch((e) => {
            toast.error(e.response.data)
        })
}
export const addTrackToPlaylist = (name,artist,url,id,saveData,saveDataTracks) =>{

    const body = {
        "name": name,
        "artist": artist,
        "url": url
    }
    console.log(body)
    axios.post(`${baseUrl}/${id}/tracks`,body, headers)
    .then(()=>{
        saveData('','','')
        getPlaylistTracks(id,saveDataTracks)
        toast.success('Música adicionada')
    })
    .catch((e)=>{
        toast.error(e.response.data.message)
    })
}