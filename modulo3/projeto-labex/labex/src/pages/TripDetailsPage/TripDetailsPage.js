import { navigateHome, navigateAdmin } from '../../routes/coordinator'
import { useNavigate, useParams } from 'react-router-dom'
import { TripDetailsPageContainer, TripImageContainer, TripContainer, InfoContainer, CandidatesContainer, ApprovedContainer, ConatinerInfos, BackButton, LoaderContainer } from './styled'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useProtectedPage } from '../../services/hooks/useProtectedPage'
import { TiArrowBack } from 'react-icons/ti'
import Loader from '../../components/Loader/Loader'
import { useEffect, useState } from 'react'
import { getRequest } from '../../services/requests'
import CardCandidate from '../../components/CardCandidate/CardCandidate'

const TripDetailsPage = () => {
  const [logOut, setLogOut] = useState(false)
  useProtectedPage(logOut)
  const [tripDetails, setTripDetails] = useState({})
  const navigate = useNavigate()
  const pathParams = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const token = window.localStorage.getItem("token")
    const headers = {
      headers: {
        auth: token
      }
    }
    getRequest(`trip/${pathParams.id}`,setTripDetails, setLoading, headers)
  },[])

  const logout = () => {
    window.localStorage.clear('token')
    setLogOut(true)
  }

  const tripDetail = () => {

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
        !loading?

      <TripDetailsPageContainer>
        <BackButton>
          <span onClick={() => { navigateAdmin(navigate) }}><TiArrowBack /></span>
        </BackButton>
        <div>
          {tripDetail()}
        </div>
        <ConatinerInfos>
          <ApprovedContainer>
            <p>Candidatas(os) Aprovadas(os): {tripDetails.trip.approved.length }</p>
            <div>
              {/* {approved()} */}
              <CardCandidate candidates = {tripDetails.trip.approved} id = {tripDetails.trip.id} status={'approved'}/>
            </div>
          </ApprovedContainer>

          <CandidatesContainer>
            <p>Candidatas(os) Pendentes: {tripDetails.trip.candidates.length }</p>
            <div>
             <CardCandidate candidates = {tripDetails.trip.candidates} id = {tripDetails.trip.id} status={'candidate'}/>

            </div>
          </CandidatesContainer>
        </ConatinerInfos>
      </TripDetailsPageContainer>
      :
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
      }

      <Footer />
    </>
  );
}

export default TripDetailsPage;