import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { GlobalContext } from './GlobalContext'
import {baseURL} from '../constants/api'

export default function GlobalState(props) {
    
    const [allPosts, setAllPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [reloadData, setReloadData] = useState(false)
    const [token, setToken] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    

    useEffect(() => {
        const getToken = window.sessionStorage.getItem("token")
        getToken && getRequest(`posts?page=${currentPage}`, setAllPosts)
    }, [currentPage, reloadData])
  
    const postRequest = async (endpoint,body, header, setData, setError) => {
        let headers
        const token =window.sessionStorage.getItem("token")

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
            setError && setError.setOpen(true)
            setError &&  setError.setMessageError(err.response.data)
        })
    }

    const putRequest = async (endpoint,body) => {
       
        const token =window.sessionStorage.getItem("token")

        let headers = {
            headers: {
                Authorization: token
            }
        }
        setLoading(true)
        await axios.post(`${baseURL}/${endpoint}`, body, headers)
        .then((response)=>{
            setLoading(false)
            setReloadData(!reloadData)
        })
        .catch((err)=>{
            setLoading(false)
            console.log(err.response.data)
        })
    }

    const getRequest = (endpoint, setData) => {
        const token =window.sessionStorage.getItem("token")
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
        .catch(()=>{
            setLoading(false)
        })
    }

    const deleteRequest = async (endpoint) => {
        const token =window.sessionStorage.getItem("token")
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

    const handleVote = (url, userVote, value) =>{
        userVote === null && postRequest(url, { direction: value})
        userVote === value && deleteRequest(url)
        userVote !== value && putRequest(url,{ direction: value})
    }

    const states = { allPosts, token, loading, reloadData, currentPage }
    const setters = { setAllPosts, setToken, setLoading, setReloadData, setCurrentPage }
    const requests = { getRequest, postRequest, putRequest, deleteRequest}
    const functions = {handleVote}

    return (
        <GlobalContext.Provider value={{ states, setters, requests, functions }}>
            {props.children}
        </GlobalContext.Provider>
    )
}