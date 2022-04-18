import { Container, Img } from "./style"

const MatchItem = (props) => {
    return (
        <Container onClick={()=>props.goToChatPage(props.match)}>
            <Img src={props.match.photo} alt ={`${props.match.name}'s photo`}/>
            <p>{props.match.name}</p>
        </Container>
    )
}

export default MatchItem