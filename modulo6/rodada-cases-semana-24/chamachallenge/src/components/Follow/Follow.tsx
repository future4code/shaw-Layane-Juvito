import { FollowDTO } from "../../interfaces/FollowDTO"
import { Container, Image } from "./style"

const Follow = (props:{follow:FollowDTO}) => {
    const {follow} = props

    return(
        <Container href={follow.html_url} target={'_blank'}>
            <Image src={follow.avatar_url} alt={"User Avatar"} />
            <p>{follow.login}</p>
        </Container>
    )
}

export default Follow