import React from 'react'
import { UserDataInitialState } from '../constants/UserDataInicialState'
import { FollowDTO } from '../interfaces/FollowDTO'
import { ReposDTO } from '../interfaces/ReposDTO'
import { UserDataDTO } from '../interfaces/UserDataDTO'
import {GlobalContext} from './GlobalContext'

type GlobalStateProps = {
    children: React.ReactNode;
}

export default function GlobalState(props: GlobalStateProps) {

    const [userData, setUserData] = React.useState<UserDataDTO>(UserDataInitialState)
    const [loading, setLoading] = React.useState(false)
    const [following, setFollowing] = React.useState<FollowDTO[]>([])
    const [followers, setFollowers] = React.useState<FollowDTO[]>([])
    const [repos, setRepos] = React.useState<ReposDTO[]>([])
    const [showInfo, setShowInfo] = React.useState('repositórios')
    const [resetData, setResetData] = React.useState(false)
    const [page, setPage] = React.useState(1)

    const states = { userData, loading, following, followers, repos, showInfo, resetData, page}
    const setters = { setUserData, setLoading, setFollowing, setFollowers, setRepos, setShowInfo, setResetData, setPage}

    return (
        <GlobalContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalContext.Provider>
       
    )
}