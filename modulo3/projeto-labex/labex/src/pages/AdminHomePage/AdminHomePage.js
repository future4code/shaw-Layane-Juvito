import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'
import { navigateHome, navigateTripDetail, navigateCreateTrip, navigateLogin } from '../../routes/coordinator';
import { AdiminHomePageContainer, CardContainer, TripsListContainer, CreateCardContainer } from './styled';
import useGet from '../../services/hooks/useGet';
import { useNavigate } from 'react-router-dom'
import {useEffect} from 'react'


const AdminHomePage = () => {
  const navigate = useNavigate()
  const trips = useGet(`trips`)

  useEffect(()=>{
    const token = window.localStorage.getItem('token')
    !token && navigateLogin(navigate)
  },[])

  const logout = () => {
    window.localStorage.clear('token')
    navigateLogin(navigate)
  }

  const tripsList = trips.trips && trips.trips.map((trip) => {
    const data = trip.name.split(',')
    return (
      <CardContainer key={trip.id} image={data[1]}>
        <div onClick={() => navigateTripDetail(navigate, trip.id)}>
          <p>{data[0]}</p>
          
        </div>
        <button onClick={() => console.log('oi')}>del</button>
      </CardContainer>
    )
  })

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
      <AdiminHomePageContainer>
        <TripsListContainer>
          <CreateCardContainer onClick = {() => navigateCreateTrip(navigate)}>
            Nova Viagem
          </CreateCardContainer>
          {tripsList}
        </TripsListContainer>
      </AdiminHomePageContainer>
      <Footer />
    </>
  );
}

export default AdminHomePage;