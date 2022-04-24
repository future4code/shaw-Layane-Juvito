import { baseUrl, aluna } from "../constants/api";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

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

export const choosePerson = (profile) => {
    const body = {
        id: profile.id,
        choice: true
    }
    axios.post(`${baseUrl}${aluna}/choose-person`,body)
    .then((res)=>{
        res.data.isMatch && toast.success(`Você deu match com ${profile.name}!`)
    })
    .catch((err)=>{
        console.log(err.response.data)
    })
}
export const clear = (setReset) => {

    axios.put(`${baseUrl}${aluna}/clear`)
    .then((res)=>{
        setReset(false)
    })
    .catch((err)=>{
        console.log(err.response.data)
    })
}