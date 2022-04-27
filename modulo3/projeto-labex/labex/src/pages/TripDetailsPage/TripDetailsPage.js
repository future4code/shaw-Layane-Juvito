import { useEffect } from 'react'
import useGet from '../../services/hooks/useGet'
import { navigateLogin, navigateHome } from '../../routes/coordinator'
import { useNavigate, useParams } from 'react-router-dom'
import { TripDetailsPageContainer, TripImageContainer, TripContainer, InfoContainer, CandidatesContainer, ApprovedContainer, ConatinerInfos } from './styled'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const TripDetailsPage = () => {
  const navigate = useNavigate()
  const pathParams = useParams()

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    !token && navigateLogin(navigate)
  }, [])

  const token = window.localStorage.getItem("token")
  const headers = {
    headers: {
      auth: token
    }
  }
  const tripDetails = useGet(`trip/${pathParams.id}`, headers)
  console.log(tripDetails)

  const logout = () => {
    window.localStorage.clear('token')
    navigateLogin(navigate)
  }

  const tripDetail = () => {
    if (tripDetails.trip) {
      const data = tripDetails.trip.name.split(',')
      return (
        <TripContainer>
          <TripImageContainer image={data[1]}>

          </TripImageContainer>
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
      tripDetails.trip.approved ?
        list = <p>Nenhum aprovado</p>
        :
        list = tripDetails.trip.approved.map((item) => {
          return (
            <>
              <p><span>Nome: </span>{item.name}</p>
            </>
          )
        })
    } else { list = <></> }
    return list
  }
  const candidates = () => {
    let list
    if (tripDetails.trip) {
      tripDetails.trip.candidates ?
        list = <p>Nenhum candidato</p>
        :
        list = tripDetails.trip.candidates.map((item) => {
          return (
            <>
              <p><span>Nome: </span>{item.name}</p>
            </>
          )
        })
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
      <TripDetailsPageContainer>
        <button onClick={() => { navigate(-1) }}>Voltar</button>
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
      </TripDetailsPageContainer>

      <Footer />
    </>
  );
}

export default TripDetailsPage;