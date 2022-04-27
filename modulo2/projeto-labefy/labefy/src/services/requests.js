import axios from 'axios';
import { baseUrl } from '../constants/urls'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
// =============================
// ===== REQUISIÇÕES GET =======

// ======Todas as Playlists=====
export const getAllPlaylists = (saveData,headers) => {
    axios.get(baseUrl, headers)
        .then((response) => {
            saveData(response.data.result.list)
        })
        .catch((e) => {
            toast.error(e.response.data.message)
        })
}
// ======Todas as músicas de uma Playlists=====
export const getPlaylistTracks = (id,saveData,headers) => {
    axios.get(`${baseUrl}/${id}/tracks`,headers)
    .then((response)=>{
        saveData(response.data.result.tracks)

    })
    .catch((e)=>{
        console.log(e.response)
        toast.error(e.response.data.message)
    })
}
// ======Busca playlists por nome=====

// ======Retorna o id de uma playlist=====
export const searchPlaylistId = (name,saveData,headers) => {
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
// ======Retorna um array com as playlists filtradas=====
export const searchPlaylist = (name,saveData,headers) => {
    if (name){
        axios.get(`${baseUrl}/search?name=${name}`, headers)
        .then((response)=>{
            saveData(response.data.result.playlist)
        })
        .catch((e)=>{
            console.log(e.response.data.message)
        })
    }
}
// ================================
// ===== REQUISIÇÕES DELETE =======

// ===== Excluir uma playlist =======
export const deletePlaylist = (id,saveData,headers) => {
    axios.delete(`${baseUrl}/${id}`, headers)
    .then(()=>{
        getAllPlaylists(saveData, headers)
        toast.success("Playlist excluída!")
    })
    .catch((e)=>{
        toast.error(e.response.data.message)
    })
}
// ===== Excluir música de uma playlist =======
export const deleteTrackFromPlaylist = (playlistId,trackId,saveData,headers) => {
    axios.delete(`${baseUrl}/${playlistId}/tracks/${trackId}`, headers)
    .then(()=>{
        getPlaylistTracks(playlistId,saveData, headers)
        toast.success("Música excluída!")
    })
    .catch((e)=>{
        toast.error(e.response.data.message)
    })
}

// ================================
// ===== REQUISIÇÕES POST =======
export const createPlaylist = (name,saveData,saveDataId,headers) => {
    const body = {
        'name': name
    }
    axios.post(baseUrl, body, headers)
        .then(() => {
            searchPlaylistId(name,saveDataId, headers)
            saveData('')
        })
        .catch((e) => {
            toast.error(e.response.data)
        })
}
export const addTrackToPlaylist = (name,artist,url,id,saveData,saveDataTracks,headers) =>{

    const body = {
        "name": name,
        "artist": artist,
        "url": url
    }
    console.log(body)
    axios.post(`${baseUrl}/${id}/tracks`,body, headers)
    .then(()=>{
        saveData('','','')
        getPlaylistTracks(id,saveDataTracks,headers)
        toast.success('Música adicionada')
    })
    .catch((e)=>{
        toast.error(e.response.data.message)
    })
}