import { baseUrl, aluna } from "../constants/api";
import axios from "axios";

export const getProfileToChoose = (saveData,setLoading) => {
    setLoading(true)
    axios.get(`${baseUrl}${aluna}/person`)
    .then((res)=>{
        saveData(res.data.profile)
    })
    .catch((err)=>{
        console.log(err.response.data)
    })
}

export const getMatches = (saveData, setLoading) => {
    setLoading(true)
    axios.get(`${baseUrl}${aluna}/matches`)
    .then((res)=>{
        saveData(res.data.matches)
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const choosePerson = (id) => {
    const body = {
        id: id,
        choice: true
    }
    axios.post(`${baseUrl}${aluna}/choose-person`,body)
    .then(()=>{
        // console.log(res.data)
    })
    .catch((err)=>{
        console.log(err.response.data)
    })
}
export const clear = () => {

    axios.put(`${baseUrl}${aluna}/clear`)
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err.response.data)
    })
}