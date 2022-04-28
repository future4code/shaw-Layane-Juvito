import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useProtectedPage } from '../../services/hooks/useProtectedPage';
import { decideCandidate } from '../../services/requests';
import { UserDetailsPageContainer, Container, CandidateImage, Rigth, Left, ContainerInfos, ContainerButtons, LoaderContainer, BackButton } from './styled';
import { navigateHome, navigateLogin } from '../../routes/coordinator';
import {TiArrowBack} from 'react-icons/ti'
import Loader from '../../components/Loader/Loader';


const UserDetailsPage = () => {
  useProtectedPage()
  const [userInfo, setUserInfo] = useState()
  const navigate = useNavigate()

  const pathParams = useParams()

  useEffect(() => {
    const userInfo = window.localStorage.getItem('candidate')
    setUserInfo(JSON.parse(userInfo))
  }, [])

  const logout = () => {
    window.localStorage.clear('token')
    navigateLogin(navigate)
  }

  const decide = ( candidateId ) => {
    const token = window.localStorage.getItem("token")
    const headers = {
      headers: {
        auth: token
      }
    }
    decideCandidate(pathParams.tripId,pathParams.id, headers, true)
    navigate(-1)
  }
  const deny = () => {
    const token = window.localStorage.getItem("token")
    const headers = {
      headers: {
        auth: token
      }
    }
    decideCandidate(pathParams.tripId,pathParams.id, headers, false)
    navigate(-1)
  }
  const userDetail = () => {
    if(userInfo){
      const data = userInfo.name.split(',')
      return (
        
        <Container>
          <ContainerInfos>
            <Left>
              <CandidateImage image={data[1]} />
              <span>{data[0]}</span>
            </Left>
            <Rigth>
              <p><span>Nome: </span>{data[0]}</p>
              <p><span>Idade: </span>{userInfo.age}</p>
              <p><span>Profissão: </span>{userInfo.profession}</p>
              <p><span>País: </span>{userInfo.country}</p>
              <p><span>Texto da aplicação: </span>{userInfo.applicationText}</p>
            </Rigth>
          </ContainerInfos>
          <ContainerButtons>
            <button onClick={()=>decide(userInfo.id)} >Aprovar</button>
            <button onClick={deny}>Reprovar</button>
          </ContainerButtons>
        </Container>
      )
    }
  }
  return (
    <>
       <Header
        firstButton={
          {
            contentText: 'Início',
            function: navigateHome,
          }
        }
        secondButton={
          {
            contentText: 'Sair',
            function: logout,
          }
        }
      />
      {
        userInfo ?

      <UserDetailsPageContainer>
        <BackButton>
          <span onClick={() => { navigate(-1) }}><TiArrowBack /></span>
        </BackButton>
        {userDetail()}
      </UserDetailsPageContainer>
      : 
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
      }
      <Footer />
    </>
  );
}

export default UserDetailsPage;