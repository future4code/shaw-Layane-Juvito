import { TripsListPageContainer, CardTest, CardContainer, ImageContainer, InfoText, CardInfo, Button } from './styled'
import Header from '../../components/Header/Header'
import useGet from '../../services/hooks/useGet'
import { navigateHome } from '../../routes/coordinator'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
// import { useState } from 'react';

const TripsListPage = () => {
  // const [show, setShow] = useState(false)
  // const navigate = useNavigate()
  // let location = useLocation();
  // let state = location.state as { backgroundLocation: Location };

  const trips = useGet(`trips`)

  const tripsList = trips.trips && trips.trips.map((item) => {
    const data = item.name.split(',')
    return (
      <CardTest key={item.id}>
        <ImageContainer image={data[1]}>
          {item.planet}
        </ImageContainer>
        <CardInfo>
          <InfoText>
            <p><span>Nome: </span>{data[0]}</p>
            <p><span>Planeta: </span>{item.planet}</p>
            <p><span>Descrição: </span>{item.description}</p>
            <p><span>Duração: </span>{item.durationInDays} dias</p>
            <p><span>Data: </span>{item.date}</p>
          </InfoText>
          <Link
            key={item.id}
            to={`/trips/application`}
          >
          <Button>Inscrever-se</Button> 
          {/* função do button: onClick={()=>navigateApplication(navigate)} */}
          </Link>
          
        </CardInfo>
      </CardTest>
    )
  })


  return (
    <>
      <Header
        firstButton={
          {
            contentText: '',
            function: '',
          }
        }
        secondButton={
          {
            contentText: 'Início',
            function: navigateHome,
          }
        }
      />
      <TripsListPageContainer>
        <input placeholder={'Buscar Viagem'} />
        <CardContainer>
          {tripsList}
        </CardContainer>

      </TripsListPageContainer>
      <Footer />
    </>
  );
}

export default TripsListPage;