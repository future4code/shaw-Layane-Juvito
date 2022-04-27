import { Container, Img, ImgContainer, ProfileContainer, PulseLike, Pulse, ButtonsContainer, TextContainer, ImgBlur, Button, ResetCOntainer } from "./style"
import { FaHeart } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import Loader from "../Loader/Loader"


const Profile = (props) => {
   

    return (
        <Container>
            {    
                props.reset ? 
                <ResetCOntainer>
                    <p>Iiih, isso é tudo pessoal! Que tal atualizar?! </p>
                    <img src = {'https://i.ytimg.com/vi/gOwj2UIiM1I/maxresdefault.jpg'} alt={'isso eh tudo pessoal'}/>
                    <Button onClick={props.clear}>Atualizar</Button>
                </ResetCOntainer>

                :
            
                props.loading ?

                <Loader />

                :

                <ProfileContainer>
                    <ImgContainer  img={props.profile.photo}>
                        <ImgBlur>
                            <Img id={'Test'} src={props.profile.photo} alt={`${props.profile.name}'s photo`} />
                        </ImgBlur>
                    </ImgContainer>
                    <TextContainer>
                        <h1>{props.profile.name}</h1>
                        <h2>{props.profile.age} anos</h2>
                        <p>{props.profile.bio}</p>
                    </TextContainer>
                </ProfileContainer>
            }
           
            <ButtonsContainer>
                <Pulse onClick={ props.deslike}>
                    <ImCross />
                </Pulse>
                <PulseLike onClick={() => props.like(props.profile)}>
                    <FaHeart />
                </PulseLike>
            </ButtonsContainer>
        </Container>
    )
}

export default Profile