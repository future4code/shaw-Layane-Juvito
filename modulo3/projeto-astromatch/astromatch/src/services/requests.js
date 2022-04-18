import { baseUrl, headers } from "../constants/api";
import axios from "axios";

export const getProfileToChoose = (saveData) => {
    axios.get(`${baseUrl}layane/person`)
    .then((res)=>{
       saveData(res.data.profile)
    })
    .catch((err)=>{
        console.log(err.response.data)
    })
}

export const getMatches = (saveData) => {
    axios.get(`${baseUrl}layane/matches`)
    .then((res)=>{
        saveData(res.data.matches)
    })
    .catch((err)=>{
        console.log(err.response.data)
    })
}

export const choosePerson = (id) => {
    const body = {
        id: id,
        choice: true
    }
    axios.post(`${baseUrl}layane/choose-person`,body)
    .then(()=>{
        // console.log(res.data)
    })
    .catch((err)=>{
        console.log(err.response.data)
    })
}
export const clear = () => {

    axios.put(`${baseUrl}/layane/clear`)
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err.response.data)
    })
}