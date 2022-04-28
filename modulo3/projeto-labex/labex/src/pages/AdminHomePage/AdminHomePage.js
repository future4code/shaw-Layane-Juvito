import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'
import { navigateHome, navigateTripDetail, navigateCreateTrip, navigateLogin } from '../../routes/coordinator';
import { AdiminHomePageContainer, CardContainer, TripsListContainer, CreateCardContainer } from './styled';
import { useNavigate } from 'react-router-dom'
import { useProtectedPage } from '../../services/hooks/useProtectedPage';
import { deletetrip, getRequest } from '../../services/requests';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader'
import {FaTrash} from 'react-icons/fa'



const AdminHomePage = () => {

  useProtectedPage()


  const navigate = useNavigate()
  const [trips, setTrips] = useState({})


  const logout = () => {
    window.localStorage.clear('token')
    navigateLogin(navigate)
  }

  const deleteTrip = (id) => {
    const token = window.localStorage.getItem("token")
    const headers = {
      headers: {
        auth: token
      }
    }

    deletetrip(id, headers)
  }
  useEffect(() => {
    getRequest(`trips`, setTrips)
  }, [deleteTrip])

  const tripsList = trips.trips && trips.trips.map((trip) => {
    const data = trip.name.split(',')
    return (
      <CardContainer key={trip.id} image={data[1]}>
        <div onClick={() => navigateTripDetail(navigate, trip.id)}>
          <p>{data[0]}</p>

        </div>
        <span onClick={() => deleteTrip(trip.id)}><FaTrash /></span>
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
        {trips.trips ?
          <TripsListContainer>
            <CreateCardContainer onClick={() => navigateCreateTrip(navigate)}>
              Nova Viagem
            </CreateCardContainer>
            {tripsList}
          </TripsListContainer>
          :
          <Loader />
        }
      </AdiminHomePageContainer>
      <Footer />
    </>
  );
}

export default AdminHomePage;