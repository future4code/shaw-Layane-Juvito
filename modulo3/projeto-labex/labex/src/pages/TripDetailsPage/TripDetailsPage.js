import useGet from '../../services/hooks/useGet'
import { navigateLogin, navigateHome, navigateUserdetail } from '../../routes/coordinator'
import { useNavigate, useParams } from 'react-router-dom'
import { TripDetailsPageContainer, TripImageContainer, TripContainer, InfoContainer, CandidatesContainer, ApprovedContainer, ConatinerInfos, CandidateImage, CandidateContainer, CandidateInfo, BackButton, LoaderContainer } from './styled'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useProtectedPage } from '../../services/hooks/useProtectedPage'
import { TiArrowBack } from 'react-icons/ti'
import Loader from '../../components/Loader/Loader'

const TripDetailsPage = () => {

  useProtectedPage()

  const navigate = useNavigate()
  const pathParams = useParams()

  const token = window.localStorage.getItem("token")
  const headers = {
    headers: {
      auth: token
    }
  }
  const tripDetails = useGet(`trip/${pathParams.id}`, headers)


  const logout = () => {
    window.localStorage.clear('token')
    navigateLogin(navigate)
  }

  const goToUserDetail = (item) => {
    window.localStorage.setItem('candidate', JSON.stringify(item))
    navigateUserdetail(navigate,tripDetails.trip.id,item.id)
  }

  const tripDetail = () => {
    if (tripDetails.trip) {
      const data = tripDetails.trip.name.split(',')
      return (
        <TripContainer>
          <TripImageContainer image={data[1]} />
          <InfoContainer>
            <p><span>Nome: </span>{data[0]}</p>
            <p><span>Planeta: </span>{tripDetails.trip.planet}</p>
            <p><span>Descrição: </span>{tripDetails.trip.description}</p>
            <p><span>Duração: </span>{tripDetails.trip.durationInDays} dias</p>
            <p><span>Data: </span>{tripDetails.trip.date}</p>
          </InfoContainer>
        </TripContainer>
      )
    } else { return <p>carregando...</p> }

  }

  const approved = () => {
    let list
    if (tripDetails.trip) {
      !tripDetails.trip.approved.length > 0  ?
        list = <p>Nenhum aprovado</p>
        :
        list = tripDetails.trip.approved.map((item) => {
          const data = item.name.split(',')
          return (
            <CandidateContainer key={item.id}>
            <CandidateImage image={data[1]} />
            <CandidateInfo>
              <p>{data[0]}</p>
            </CandidateInfo>
          </CandidateContainer>
          )
        })
    } else { list = <></> }
    return list
  }
  const candidates = () => {
    let list
    if (tripDetails.trip) {
      tripDetails.trip.candidates.length > 0 ?
        list = tripDetails.trip.candidates.map((item) => {
          const data = item.name.split(',')
          return (
            <CandidateContainer key={item.id}>
              <CandidateImage image={data[1]}></CandidateImage>
              <CandidateInfo>
                <p>{data[0]}</p>
                <button onClick={()=>goToUserDetail(item)}>ver mais</button>
              </CandidateInfo>
            </CandidateContainer>
          )
        })
        :
        list = <p>Nenhum candidato</p>

    } else { list = <></> }
    return list
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
        tripDetails.trip?

      <TripDetailsPageContainer>
        <BackButton>
          <span onClick={() => { navigate(-1) }}><TiArrowBack /></span>
        </BackButton>
        <div>
          {tripDetail()}
        </div>
        <ConatinerInfos>
          <ApprovedContainer>
            <p>Candidatas(os) Aprovadas(os)</p>
            <div>
              {approved()}
            </div>
          </ApprovedContainer>
          <CandidatesContainer>
            <p>Candidatas(os) Pendentes</p>
            <div>
              {candidates()}

            </div>
          </CandidatesContainer>
        </ConatinerInfos>
      </TripDetailsPageContainer>:
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
      }

      <Footer />
    </>
  );
}

export default TripDetailsPage;