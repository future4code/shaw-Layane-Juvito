import axios from "axios"
import { useEffect, useState } from "react"
import { baseUrl } from '../../constants/api'

const useGet = (url,headers) => {

    const [data, setData] = useState({})

    const getRequest = () => {
        headers ?
        
        axios.get(baseUrl+url,headers)
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err.response)
        })
        :
        axios.get(baseUrl+url)
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    useEffect (
        () => {
            getRequest()
        },[]
    )
       
    return data
}

export default useGet