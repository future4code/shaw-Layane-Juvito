import axios from "axios"
import { baseUrl } from '../constants/api'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

export const deletetrip = (id, headers, setDel) => {

    axios.delete(`${baseUrl}trips/${id}`, headers)
    .then(() => {
        toast.success('Viagem ecluída com sucesso!')
        setDel(true)
    })
    .catch((err) => {
        toast.error(err.response.data.message)
    })
}

export const decideCandidate = (tripId, candidateId, headers, status, setLoading, mensagem) => {
    setLoading(true)
    const body = {
        "approve": status
    }
    axios.put(`${baseUrl}trips/${tripId}/candidates/${candidateId}/decide`, body, headers)
    .then( () => {
        setLoading(false)
        status ?
        toast.info('Pessoa candidata aprovada!')
        :
        toast.info('Pessoa candidata reprovada!')
    })
    .catch ( (err) => {
        toast.error(err.response.data.message)
    })
}

export const postRequest = async (url,body,headers, mensagem, setData,setLoading) => {
    setLoading(true)
    await axios.post(baseUrl+url, body, headers)
    .then((res)=>{
        setLoading(false)
        toast.success(mensagem)
        setData && setData(res.data)

    })
    .catch((err)=>{
        toast.error(err.response.data.message)
    })
}

export const getRequest = async (url, setData,setLoading, headers )=>{
    setLoading(true)
    headers ?
    axios.get(baseUrl+url,headers)
    .then((res)=>{
        setData(res.data)
        setLoading(false)
    })
    .catch((err)=>{
        toast.error(err.response.data.message)
    })
    :
    axios.get(baseUrl+url)
    .then((res)=>{
        setData(res.data)
        setLoading(false)
    })
    .catch((err)=>{
        toast.error(err.response.data.message)
    })
}