import moment from "moment"
import { Avatar, Container, Paragraph, Name, UserName, RepoNumber, Link, Bio, Follow, FollowContainer } from "./style"
import { MdPeopleAlt, MdOutlineLocationOn, MdMailOutline, MdOutlineUpdate, MdCreate } from 'react-icons/md'
import { BsDot } from 'react-icons/bs'
import { BiBookBookmark } from 'react-icons/bi'
import { CardProps } from "../../interfaces/CardProps"

const Card = (props: CardProps) => {
    const { userData, getUserFollowers, getUserFollowing, getUserRepos } = props

    return (
        <Container>
            <Avatar src={userData.avatar_url} alt="User Avatar" />
            <div>
                <Link href={userData.html_url}>
                    <Name>{userData.name}</Name>
                </Link>
                <Link href={userData.html_url}>
                    <UserName>{userData.login}</UserName>
                </Link>
            </div>
            {userData.bio && <Bio> {userData.bio}</Bio>}
            <Paragraph>
                <FollowContainer onClick={getUserFollowers}>
                    <MdPeopleAlt color="#cdc8c8c9" /> {userData.followers}
                    <Follow>Seguidores</Follow>
                </FollowContainer>
                <FollowContainer onClick={getUserFollowing}>
                    <BsDot color="#cdc8c8c9" /> {userData.following} 
                    <Follow>Seguindo</Follow>
                </FollowContainer>
            </Paragraph>
            {userData.location && <Paragraph>
                <MdOutlineLocationOn color="#cdc8c8c9" />{userData.location}
            </Paragraph>}
            {userData.email && <Paragraph>
                <MdMailOutline color="#cdc8c8c9" />{userData.email}
            </Paragraph>}
            <Paragraph onClick={getUserRepos}>
                <BiBookBookmark color="#cdc8c8c9" /> Repositórios <RepoNumber>{userData.public_repos}</RepoNumber>
            </Paragraph>
            <Paragraph>
                <MdCreate color="#cdc8c8c9" /> Criado: {moment(userData.created_at).format("DD/MM/YYYY")}
            </Paragraph>
            <Paragraph>
                <MdOutlineUpdate color="#cdc8c8c9" /> Atualizado: {moment(userData.updated_at).format("DD/MM/YYYY")}
            </Paragraph>
        </Container>
    )
}

export default Card