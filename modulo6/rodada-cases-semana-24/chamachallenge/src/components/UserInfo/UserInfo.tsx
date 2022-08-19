import { UserInfoProps } from "../../interfaces/UserInfoProps"
import Card from "../Card/Card"
import Loader from "../Loader/Loader"
import { Infos, InfosContainer, Main, Scroll } from "./style"

const UserInfo = (props: UserInfoProps) => {
    const { userData, setShowInfo, renderInfos, loading, showInfo } = props
    return (
        <Main>
            <Card
                userData={userData}
                getUserFollowers={() => setShowInfo('seguidores')}
                getUserFollowing={() => setShowInfo('seguindo')}
                getUserRepos={() => setShowInfo('repositórios')}
            />
            <InfosContainer>
                {
                    loading ?
                        <Loader />
                        :
                        <Scroll>
                            <h1>{showInfo}</h1>
                            <Infos>
                                {renderInfos()}
                            </Infos>
                        </Scroll>
                }
            </InfosContainer>
        </Main>
    )
}

export default UserInfo