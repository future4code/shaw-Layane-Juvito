import axios from "axios"
import { useEffect, useState } from "react"

const useGet = (url) => {

    const [data, setData] = useState({})

    const getRequest = () => {
        axios.get(url)
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