import axios from 'axios'
import { Id } from 'react-toastify'
import { FollowDTO } from '../interfaces/FollowDTO'
import { ReposDTO } from '../interfaces/ReposDTO'
import { UserDataDTO } from '../interfaces/UserDataDTO'

const url = 'https://api.github.com/users'

export const getUserInfo = async (
    username: string,
    setData: React.Dispatch<React.SetStateAction<UserDataDTO>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    showError: (message: String) => Id
) => {
    setLoading(true)
    try {
        const userInfo = await axios.get(`${url}/${username}`)
        setData(userInfo.data)
        setLoading(false)
    } catch (error:any) {
        setLoading(false)
        showError(error.response.data.message)

    }
}

export const getFollowers = async (
    username: string,
    setData: React.Dispatch<React.SetStateAction<FollowDTO[]>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    showError: (message: String) => Id
) => {
    setLoading(true)
    try {
        const userInfo = await axios.get(`${url}/${username}/followers`)
        setData(userInfo.data)
        setLoading(false)
    } catch (error:any) {
        setLoading(false)
        showError(error.response.data.message)

    }
}
export const getFollowing = async (
    username: string,
    setData: React.Dispatch<React.SetStateAction<FollowDTO[]>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    showError: (message: String) => Id
) => {
    setLoading(true)
    try {
        const userInfo = await axios.get(`${url}/${username}/following`)
        setData(userInfo.data)
        setLoading(false)
    } catch (error:any) {
        setLoading(false)
        showError(error.response.data.message)
    }
}

export const getRepos = async (
    username: string,
    setData: React.Dispatch<React.SetStateAction<ReposDTO[]>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    page: number,
    showError: (message: String) => Id
) => {
    setLoading(true)
    try {
        const userInfo = await axios.get(`${url}/${username}/repos?page=${page}&sort=created`)
        setData(userInfo.data)
        setLoading(false)
    } catch (error:any) {
        setLoading(false)
        showError(error.response.data.message)

    }
}  