import React from 'react'
import { FollowDTO } from '../interfaces/FollowDTO'
import { ReposDTO } from '../interfaces/ReposDTO'
import { UserDataDTO } from '../interfaces/UserDataDTO'

interface GlobalContextInterface {
    states: {
        userData: UserDataDTO
        loading: boolean 
        following: FollowDTO[] 
        followers: FollowDTO[]
        repos: ReposDTO[]
        showInfo: string
        resetData:boolean
        page:number
    },
    setters: {
        setUserData: React.Dispatch<React.SetStateAction<UserDataDTO>>
        setLoading: React.Dispatch<React.SetStateAction<boolean>>
        setFollowing: React.Dispatch<React.SetStateAction<FollowDTO[]>>
        setFollowers: React.Dispatch<React.SetStateAction<FollowDTO[]>>
        setRepos:React.Dispatch<React.SetStateAction<ReposDTO[]>>
        setShowInfo: React.Dispatch<React.SetStateAction<string>>
        setResetData: React.Dispatch<React.SetStateAction<boolean>>
        setPage: React.Dispatch<React.SetStateAction<number>>
    }
}
export const GlobalContext = React.createContext<GlobalContextInterface>({} as GlobalContextInterface)