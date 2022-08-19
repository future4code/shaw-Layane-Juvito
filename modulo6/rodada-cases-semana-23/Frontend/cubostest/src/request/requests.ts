import axios from "axios"
import { GetFormDTO } from "../interfaces/GetFormDTO"
import { PostProps } from "../interfaces/PostProps"


const baseURL = 'https://cubos-challenge.herokuapp.com/'

export const getRequest = async (endpoint: string, setData:  React.Dispatch<React.SetStateAction<GetFormDTO[]>>, setError: (error:string)=> void)=> {
    try {
        const response = await axios.get(baseURL+endpoint)
        setData(response.data.userData)
    } catch (error:any) {
        console.log(error)
        setError(`${error.response?.data?.error || error.message}`)
    }
}

export const postRequest = async (endpoint: string, body: PostProps, setReload: React.Dispatch<React.SetStateAction<boolean>>, reload: boolean, setError: (error:string)=> void)=> {
    try {
        await axios.post(baseURL+endpoint, body)
        setReload(!reload)
    } catch (error:any) {
        setError(`${error.response?.data?.error || error.message}`)
    }
}

export const deleteRequest = async (endpoint: string, setReload: React.Dispatch<React.SetStateAction<boolean>>, reload: boolean, setError: (error:string)=> void)=> {
    try {
        await axios.delete(baseURL+endpoint)
        setReload(!reload)
    } catch (error:any) {
        setError(`${error.response?.data?.error || error.message}`)
    }
}