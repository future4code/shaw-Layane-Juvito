import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { GlobalContext } from './GlobalContext'
import {baseURL} from '../constants/api'

export default function GlobalState(props) {
    
    
    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState('')
    const [keepLogin, setkeepLogin] = useState(false)
    
    useEffect(() => {
        const getToken = window.localStorage.getItem("token")
        getToken && setToken(getToken)
    }, [])

    const postRequest = (endpoint,body, headers, setData) => {
        setLoading(true)
        axios.post(`${baseURL}/${endpoint}`, body, headers)
        .then((response)=>{
            setData(response.data.token)
            setLoading(false)
        })
        .catch((err)=>{
            setLoading(false)
            console.log(err.response.data)
        })
    }

    const states = { token, loading, keepLogin }
    const setters = { setToken, setLoading, setkeepLogin }
    const requests = {postRequest}
    return (
        <GlobalContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalContext.Provider>
    )
}