import axios from 'axios'
import { FollowDTO } from '../interfaces/FollowDTO'
import { ReposDTO } from '../interfaces/ReposDTO'
import { UserDataDTO } from '../interfaces/UserDataDTO'

const url = 'https://api.github.com/users'

export const getUserInfo = async (
    username: string, 
    setData: React.Dispatch<React.SetStateAction<UserDataDTO>>, 
    setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
        setLoading(true)
    try {
        const userInfo = await axios.get(`${url}/${username}`)
        setData(userInfo.data)
        setLoading(false)
    } catch (error) {

    }
}   

export const getFollowers = async (
    username: string, 
    setData: React.Dispatch<React.SetStateAction<FollowDTO[]>>, 
    setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    setLoading(true)
    try {
        const userInfo = await axios.get(`https://api.github.com/users/${username}/followers`)
        setData(userInfo.data)
        setLoading(false)
    } catch (error) {

    }
} 
export const getFollowing = async (
    username: string, 
    setData: React.Dispatch<React.SetStateAction<FollowDTO[]>>, 
    setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    setLoading(true)
    try {
        const userInfo = await axios.get(`https://api.github.com/users/${username}/following`)
        setData(userInfo.data)
        setLoading(false)
    } catch (error) {

    }
} 

export const getRepos = async (
    url: string, 
    setData: React.Dispatch<React.SetStateAction<ReposDTO[]>>, 
    setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    setLoading(true)
    try {
        const userInfo = await axios.get(url)
        setData(userInfo.data)
        setLoading(false)
    } catch (error) {

    }
}  