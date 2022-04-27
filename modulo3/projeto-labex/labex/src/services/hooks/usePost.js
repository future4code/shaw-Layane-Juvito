import axios from "axios"
import { useEffect } from "react"
import { baseUrl } from "../../constants/api"


const usePost = async (endpoint, body,headers,mensagem) => {

    useEffect (
        () => {
            postRequest()
        }, []
    )

    const postRequest = () => {
        axios.post(baseUrl+endpoint, body, headers)
        .then((res)=>{
            console.log(mensagem)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }
}

export default usePost