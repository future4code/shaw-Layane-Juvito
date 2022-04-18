import { Container, Img } from "./style"

const Profile = (props) => {
    return (
        <Container>
            <div>
                <Img src = {props.profile.photo} alt = {`${props.profile.name}'s photo`} />
            </div>
            <div>
                <p>{props.profile.name}</p>
                <p>{props.profile.age} anos</p>
                <p>{props.profile.bio}</p>
            </div>
            <button onClick={()=>props.like(props.profile.id)}>like</button>
            <button onClick={props.deslike}>deslike</button>
        </Container>
    )
}

export default Profile