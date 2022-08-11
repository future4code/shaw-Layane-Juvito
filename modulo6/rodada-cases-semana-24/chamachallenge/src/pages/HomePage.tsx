import React from "react"
import Card from "../components/Card/Cardt"
import Header from "../components/Header/Header"
import { UserDataInitialState } from "../constants/UserDataInicialState"
import { UserDataDTO } from "../interfaces/UserDataDTO"
import { getFollowers, getUserInfo, getRepos, getFollowing } from "../services/request"
import { BsGithub } from 'react-icons/bs'
import { HomeContainer, HomeMain, Infos, InfosContainer, Scroll } from "./style"
import { FollowDTO } from "../interfaces/FollowDTO"
import Follow from "../components/Follow/Follow"
import { ReposDTO } from "../interfaces/ReposDTO"
import Repos from "../components/Repos/Repos"

const HomePage = () => {
    const [search, setSearch] = React.useState('')
    const [userData, setUserData] = React.useState<UserDataDTO>(UserDataInitialState)
    const [loading, setLoading] = React.useState(false)
    const [following, setFollowing] = React.useState<FollowDTO[]>([])
    const [followers, setFollowers] = React.useState<FollowDTO[]>([])
    const [repos, setRepos] = React.useState<ReposDTO[]>([])
    const [showInfo, setShowInfo] = React.useState('')

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const getUserData = () => {
        getUserInfo(search, setUserData, setLoading)
        setSearch('')
    }

    console.log(repos)
    const getUserFollowers = () => {
        getFollowers(userData.login, setFollowers, setLoading)
        setShowInfo('seguidores')
    }
    const getUserFollowing = () => {
        getFollowing(userData.login, setFollowing, setLoading)
        setShowInfo('seguindo')
    }
    const getUserRepos = () => {
        getRepos(userData.repos_url, setRepos, setLoading)
        setShowInfo('repositórios')
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
            <Header
                onChange={onChange}
                onClick={getUserData}
                search={search}
            />
            {
                !userData.id ?
                    <HomeContainer>
                        <BsGithub /> GitHub Seacher
                    </HomeContainer>
                    :
                    <HomeMain>
                        <Card
                            userData={userData}
                            getUserFollowers={getUserFollowers}
                            getUserFollowing={getUserFollowing}
                            getUserRepos={getUserRepos}
                        />
                        <InfosContainer>
                            <Scroll>
                                <h1>{showInfo}</h1>
                                <Infos>
                                    {renderInfos()}
                                </Infos>
                            </Scroll>
                        </InfosContainer>
                    </HomeMain>
            }
        </>
    )
}

export default HomePage