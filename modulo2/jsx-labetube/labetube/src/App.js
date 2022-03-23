import './App.css';
import {FaHome, FaAngleDoubleUp, FaCircleNotch, FaYoutube, FaPenSquare, FaSistrix, FaCaretSquareRight, FaMicrophone} from 'react-icons/fa';
import CardVideo from './components/CardVideo';
import { BotaoMenu } from './components/BotaoMenu';

function App() {
  const titulo = "Título do vídeo";
    function reproduzVideo() {
      alert("O vídeo está sendo reproduzido")
    };
  const linkImg = "https://picsum.photos/400/400?a=1";
  return (
    <div className="tela-inteira">
        <header>
            <h1 id="title-logo">La<span id="logo-text">b<FaCaretSquareRight id="icon-logo" />T</span>ube</h1>
            <div class="input-area">
              <input type="text" placeholder="Busca" id="campoDeBusca" />
              <FaSistrix id="icon-input" />
              <div id="phone-search">
                <FaMicrophone id="phone-search-icon" />
              </div>
            </div>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul id="division-section">
                  <div >
                    <BotaoMenu icon={<FaHome />} texto = "Início"/>
                    <BotaoMenu icon={<FaAngleDoubleUp />} texto = "Em alta"/>
                    <BotaoMenu icon={<FaPenSquare />} texto = "Inscrições"/>
                  </div>
                  </ul>
                <ul>
                  <div>
                    <BotaoMenu icon={<FaYoutube />} texto = "Originais"/>
                    <BotaoMenu icon={<FaCircleNotch />} texto = "Histórico"/>
                  </div>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <CardVideo titulo ={titulo} funcao={reproduzVideo} link={linkImg} />
                <CardVideo titulo ={titulo} funcao={reproduzVideo} link={linkImg} />
                <CardVideo titulo ={titulo} funcao={reproduzVideo} link={linkImg} />
                <CardVideo titulo ={titulo} funcao={reproduzVideo} link={linkImg} />
                <CardVideo titulo ={titulo} funcao={reproduzVideo} link={linkImg} />
                <CardVideo titulo ={titulo} funcao={reproduzVideo} link={linkImg} />
                <CardVideo  titulo ={titulo} funcao={reproduzVideo} link={linkImg} />
                <CardVideo titulo ={titulo} funcao={reproduzVideo} link={linkImg} />
               
            </section>
        </main>

        <footer>
          &copy; Desenvolvido por Layane Bastos.
        </footer>
    </div >
  );
}

export default App;
