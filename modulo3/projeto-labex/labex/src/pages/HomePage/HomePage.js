import Header from '../../components/Header/Header'
import rocket from '../../assets/rocket.png'
import { HomePageContainer } from './styled'
import { useNavigate } from 'react-router-dom'
import { navigateTrips , navigateLogin} from '../../routes/coordinator'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header
        firstButton={
          {
            contentText: 'Viagens',
            function: navigateTrips,
          }
        }
        secondButton={
          {
            contentText: 'Entrar',
            function: navigateLogin,
          }
        }

      />

      <HomePageContainer>
        <div>
          <h1>"Encontre as melhores <br /> viagens espaciais aqui!"</h1>
          <button onClick={() => navigateTrips(navigate)}>Viagens</button>
        </div>
        <img src={rocket} alt={'Foguete da Logo'} />
      </HomePageContainer>

      <Footer />
    </>
  );
}

export default HomePage;