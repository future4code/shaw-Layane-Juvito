import axios from "axios"
import { baseUrl } from '../constants/api'

export const deletetrip = (id, headers) => {

    axios.delete(`${baseUrl}trips/${id}`, headers)
    .then(() => {
        console.log('Viagem ecluída com sucesso!')
    })
    .catch((error) => {
        console.log(error.response)
    })
}

export const decideCandidate = (tripId, candidateId, headers, status) => {
    const body = {
        "approve": status
    }
    axios.put(`${baseUrl}trips/${tripId}/candidates/${candidateId}/decide`, body, headers)
    .then( () => {
        console.log('Candidata(o) aprovada(o)!')
    })
    .catch ( (error) => {
        console.log(error.response)
    })
}

export const postRequest = async (url,body,headers, mensagem, setData) => {
    await axios.post(baseUrl+url, body, headers)
    .then((res)=>{
        console.log(mensagem)
        setData && setData(res.data)
    })
    .catch((error)=>{
        console.log(error.response)
    })
}

export const getRequest = async (url, setData)=>{
    axios.get(baseUrl+url)
    .then((res)=>{
        setData(res.data)
    })
    .catch((err)=>{
        console.log(err.response)
    })
}