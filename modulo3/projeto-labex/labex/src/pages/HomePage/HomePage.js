import Header from '../../components/Header/Header'
import rocket from '../../assets/rocket.png'
import { HomePageContainer } from './styled'

const HomePage = () => {
  return (
    <>
      <Header
        firstButton={'Viagens'} 
        secondButton={'Login'} 
      />

      <HomePageContainer>
        <div>
          <h1>"Encontre as melhores <br /> viagens espaciais aqui!"</h1>
          <button>Viagens</button>
        </div>
        <img src={rocket} alt={'Foguete da Logo'} />
      </HomePageContainer>
    </>
  );
}

export default HomePage;