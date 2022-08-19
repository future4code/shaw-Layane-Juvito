import React from "react"
import { getFollowers, getUserInfo, getRepos, getFollowing } from "../../services/request"
import { BsGithub } from 'react-icons/bs'
import { HomeContainer } from "./style"
import { FollowDTO } from "../../interfaces/FollowDTO"
import Follow from "../../components/Follow/Follow"
import { ReposDTO } from "../../interfaces/ReposDTO"
import Repos from "../../components/Repos/Repos"
import { GlobalContext } from "../../Global/GlobalContext"
import HeaderHistory from "../../components/HeaderHistory/HeaderHistory"
import { UserDataInitialState } from "../../constants/UserDataInicialState"
import UserInfo from "../../components/UserInfo/UserInfo"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const HistoryPage = () => {
    const [search, setSearch] = React.useState('')
    const [selectOptions, setSelectOptions] = React.useState<string[]>([])
    const { states, setters } = React.useContext(GlobalContext)
    const { userData, loading, following, followers, repos, showInfo, resetData, page } = states
    const { setUserData, setLoading, setFollowing, setFollowers, setRepos, setShowInfo, setResetData, setPage } = setters

    React.useEffect(() => {
        const localHistory = window.localStorage.getItem("history")
        const localArray: string[] = localHistory ? JSON.parse(localHistory) : []
        setSelectOptions(localArray)
    }, [])

    React.useEffect(() => {
        search && getUserData()
    }, [search])


    React.useEffect(() => {
        if(userData.login){
            getRepos(userData.login, setRepos, setLoading, page, notify)
            getFollowers(userData.login, setFollowers, setLoading, notify)
            getFollowing(userData.login, setFollowing, setLoading, notify)
        }
    }, [userData])

    React.useEffect(() => {
        setFollowers([])
        setFollowing([])
        setRepos([])
    }, [resetData])

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const notify = (message:String) => toast.error(message);

    const deleteHistory = () => {
        window.localStorage.removeItem("history")
        setSelectOptions([])
        setUserData(UserDataInitialState)
        setResetData(!resetData)
        toast.success("Histórico deletado!")
    }
    const goBack = () => {
        setSelectOptions([])
        setUserData(UserDataInitialState)
        setResetData(!resetData)
    }

    const getUserData = () => {
        const localHistory = window.localStorage.getItem("history")
        const localArray: string[] = localHistory ? JSON.parse(localHistory) : []
        const updateLocalArray = [...localArray, search]
        window.localStorage.setItem("history", JSON.stringify(updateLocalArray))
        getUserInfo(search, setUserData, setLoading, notify)
        setSearch('')
        setResetData(!resetData)
    }

    const renderInfos = () => {
        switch (showInfo) {
            case 'seguidores':
                return followers.map((follower: FollowDTO) => {
                    return <Follow
                        key={follower.id}
                        follow={follower}
                    />
                })
            case 'seguindo':
                return following.map((follower: FollowDTO) => {
                    return <Follow
                        key={follower.id}
                        follow={follower}
                    />
                })

            case 'repositórios': return repos.map((repo: ReposDTO) => {
                return (
                    <Repos
                        repos={repo}
                    />
                )
            })
        }
    }
    return (
        <>
            <HeaderHistory
                onChange={onChange}
                options={selectOptions}
                search={search}
                deleteHistory={deleteHistory}
                goBack={goBack}
            />
            {
                !userData.id ?
                    <HomeContainer>
                        <BsGithub /> GitHub Searcher
                    </HomeContainer>
                    :
                    <UserInfo
                        userData={userData}
                        setShowInfo={setShowInfo}
                        renderInfos={renderInfos}
                        loading={loading}
                        showInfo={showInfo}
                    />
            }

            <ToastContainer />
        </>
    )
}

export default HistoryPage