import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { GlobalContext } from './GlobalContext'
import {baseURL} from '../constants/api'

export default function GlobalState(props) {
    
    const [allPosts, setAllPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [reloadData, setReloadData] = useState(false)
    const [token, setToken] = useState('')
    const [keepLogin, setkeepLogin] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        const getToken = window.localStorage.getItem("token")
        getToken && setToken(getToken)
    }, [])

    useEffect(() => {
        getRequest(`posts?page=${currentPage}`, setAllPosts)
    }, [currentPage, reloadData])

    const postRequest = async (endpoint,body, header, setData) => {
        let headers
        const token =window.localStorage.getItem("token")

        header ? headers = header : headers = {
            headers: {
                Authorization: token
            }
        }
        setLoading(true)
        await axios.post(`${baseURL}/${endpoint}`, body, headers)
        .then((response)=>{
            setData && setData(response.data.token)
            setLoading(false)
            setReloadData(!reloadData)
        })
        .catch((err)=>{
            setLoading(false)
            console.log(err.response.data)
        })
    }
    const putRequest = async (endpoint,body, header, setData) => {
        let headers
        const token =window.localStorage.getItem("token")

        header ? headers = header : headers = {
            headers: {
                Authorization: token
            }
        }
        setLoading(true)
        await axios.post(`${baseURL}/${endpoint}`, body, headers)
        .then((response)=>{
            setData && setData(response.data.token)
            setLoading(false)
            setReloadData(!reloadData)
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

    const deleteRequest = async (endpoint, setData) => {
        const token =window.localStorage.getItem("token")
        const headers = {
            headers: {
                Authorization: token
            }
        }
        await axios.delete(`${baseURL}/${endpoint}`, headers)
        .then((response)=>{
            setReloadData(!reloadData)
        })
        .catch((err)=>{
            setLoading(false)
            console.log(err.response.data)
        })
    }

    const states = { allPosts, token, loading, reloadData, keepLogin, currentPage }
    const setters = { setAllPosts, setToken, setLoading, setReloadData, setkeepLogin, setCurrentPage }
    const requests = { getRequest, postRequest, putRequest, deleteRequest}
    return (
        <GlobalContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalContext.Provider>
    )
}