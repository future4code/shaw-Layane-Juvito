import { TripsListPageContainer, CardTest, CardContainer, ImageContainer, InfoText, CardInfo, Button } from './styled'
import Header from '../../components/Header/Header'
import useGet from '../../services/hooks/useGet'
import { navigateHome, navigateApplication, navigateAdmin } from '../../routes/coordinator'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'


const TripsListPage = () => {

  const navigate = useNavigate()

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
        
          <Button onClick={()=>navigateApplication(navigate, item.id)}>Inscrever-se</Button> 
        </CardInfo>
      </CardTest>
    )
  })


  return (
    <>
      <Header
       secondButton = {
          {
            contentText: 'Área adminstrativa',
            function: navigateAdmin,
          }
        }

       firstButton = {
          {
            contentText: 'Início',
            function: navigateHome,
          }
        }
      />
      <TripsListPageContainer>
        {/* <input placeholder={'Buscar Viagem'} /> */}
        { trips.trips ?
          <CardContainer>
            {tripsList}
          </CardContainer>
          :
          <Loader />
        }

      </TripsListPageContainer>
      <Footer />
    </>
  );
}

export default TripsListPage;