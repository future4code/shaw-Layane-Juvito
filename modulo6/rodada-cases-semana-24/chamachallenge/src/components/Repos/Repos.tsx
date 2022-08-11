import moment from "moment"
import { ReposDTO } from "../../interfaces/ReposDTO"
import { Container } from "./style"


const Repos = (props: { repos: ReposDTO }) => {
    const { repos } = props

    return (
        <Container>
            <div>
                <p>{moment(repos.created_at).format("DD/MM/YYYY")}</p>
                <p>{moment(repos.updated_at).format("DD/MM/YYYY")}</p>
            </div>
            <p>{repos.name}</p>
            <p>{repos.name}</p>
            <p>{repos.name}</p>

        </Container>
    )
}

export default Repos