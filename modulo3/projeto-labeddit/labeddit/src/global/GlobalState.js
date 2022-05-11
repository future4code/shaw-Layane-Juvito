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

    const postRequest = (endpoint,body, header, setData, functionOptional) => {
        let headers
        const token =window.localStorage.getItem("token")

        header ? headers = header : headers = {
            headers: {
                Authorization: token
            }
        }
        setLoading(true)
        axios.post(`${baseURL}/${endpoint}`, body, headers)
        .then((response)=>{
            setData && setData(response.data.token)
            functionOptional && functionOptional()
            setLoading(false)
            console.log(response.data)
        })
        .catch((err)=>{
            setLoading(false)
            console.log(err.response.data)
        })
    }
    const putRequest = (endpoint,body, header, setData, functionOptional) => {
        let headers
        const token =window.localStorage.getItem("token")

        header ? headers = header : headers = {
            headers: {
                Authorization: token
            }
        }
        setLoading(true)
        axios.post(`${baseURL}/${endpoint}`, body, headers)
        .then((response)=>{
            setData && setData(response.data.token)
            functionOptional && functionOptional()
            setLoading(false)
            console.log(response.data)
        })
        .catch((err)=>{
            setLoading(false)
            console.log(err.response.data)
        })
    }

    const getRequest = (endpoint, setData) => {
        const token =window.localStorage.getItem("token")
        const headers = {
            headers: {
                Authorization: token
            }
        }
        setLoading(true)
        axios.get(`${baseURL}/${endpoint}`, headers)
        .then((response)=>{
            setData(response.data)
            setLoading(false)
        })
        .catch((err)=>{
            setLoading(false)
            console.log(err.response.data)
        })
    }

    const deleteRequest = (endpoint, setData) => {
        const token =window.localStorage.getItem("token")
        const headers = {
            headers: {
                Authorization: token
            }
        }
        setLoading(true)
        axios.delete(`${baseURL}/${endpoint}`, headers)
        .then((response)=>{
            setLoading(false)
        })
        .catch((err)=>{
            setLoading(false)
            console.log(err.response.data)
        })
    }

    const states = { token, loading, keepLogin }
    const setters = { setToken, setLoading, setkeepLogin }
    const requests = { getRequest, postRequest, putRequest, deleteRequest}
    return (
        <GlobalContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalContext.Provider>
    )
}