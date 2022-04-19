import { Container, Img, ImgContainer, ProfileContainer, PulseLike, Pulse, ButtonsContainer, TextContainer} from "./style"
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
// import {GiSkullCrossedBones} from 'react-icons/gi'

const Profile = (props) => {
    return (
        <Container>
            {/* <ProfileContainer img = {props.profile.photo}> */}
                <ImgContainer>
                    <Img src = {props.profile.photo} alt = {`${props.profile.name}'s photo`} />
                </ImgContainer>
                <TextContainer>
                    <h1>{props.profile.name}</h1>
                    <h2>{props.profile.age} anos</h2>
                    <p>{props.profile.bio}</p>
                </TextContainer>
            {/* </ProfileContainer> */}
            <ButtonsContainer>
                <Pulse onClick={props.deslike}>
                    <ImCross />
                </Pulse>
                <PulseLike onClick={()=>props.like(props.profile.id)}>
                    <FaHeart />
                </PulseLike>
            </ButtonsContainer>
        </Container>
    )
}

export default Profile