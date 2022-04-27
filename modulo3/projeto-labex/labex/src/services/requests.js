import axios from "axios"
import { baseUrl, headers } from '../constants/api'

export const deletetrip = (id) => {

    axios.delete(`${baseUrl}trips/${id}`, headers)
    .then(() => {
        console.log('Viagem ecluída com sucesso!')
    })
    .catch((error) => {
        console.log(error.response)
    })
}

export const decideCandidate = (tripId, candidateId) => {
    const body = {
        "approve": true
    }
    axios.put(`${baseUrl}trips/${tripId}/candidates/${candidateId}/decide`, body, headers)
    .then( () => {
        console.log('Candidata(o) aprovada(o)!')
    })
    .catch ( (error) => {
        console.log(error.response)
    })
}

// export  const getRequest = async (url) => {
//      try {
//         const response = await axios.get(url);
//         console.log('requisição arquivo externo:', response.data);
//       } catch (error) {
//         console.log(error);
//       };
//  }

export const postRequest = async (url,body,headers, setData, mensagem) => {
    await axios.post(baseUrl+url, body, headers)
    .then((res)=>{
        console.log(mensagem, res.data.token)
        setData(res.data.token)
    })
    .catch((error)=>{
        console.log(error.response)
    })
}