import moment from "moment"
import { ReposDTO } from "../../interfaces/ReposDTO"
import { Container, Datas, Description, InfoContainer, Name } from "./style"
import  { MdOutlineUpdate, MdCreate, MdCode } from 'react-icons/md'

import { GiBookmarklet } from 'react-icons/gi'

const Repos = (props: { repos: ReposDTO }) => {
    const { repos } = props

    return (
        <Container href={repos.html_url} target={"_blank"}>
            <Name><GiBookmarklet color="#cdc8c8c9"/>{repos.name}</Name>
            <InfoContainer>
               { repos.description && <Description>
                    {repos.description}
                </Description>}
                <Datas><MdCreate color="#cdc8c8c9"/> Criado em: <span>{moment(repos.created_at).format("DD/MM/YYYY")}</span></Datas>
                <Datas><MdOutlineUpdate color="#cdc8c8c9"/> Última atualização: <span>{moment(repos.updated_at).format("DD/MM/YYYY")}</span></Datas>
                {repos.language && <Datas><MdCode color="#cdc8c8c9"/> Linguagem: <span>{repos.language}</span></Datas>}
            </InfoContainer>
        </Container>
    )
}

export default Repos