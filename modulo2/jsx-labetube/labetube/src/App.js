import './App.css';
import {FaHome, FaAngleDoubleUp, FaCircleNotch, FaYoutube, FaPenSquare, FaSistrix, FaCaretSquareRight, FaMicrophone} from 'react-icons/fa';

const titulo = "Título do vídeo";
function reproduzVideo() {
  alert("O vídeo está sendo reproduzido")
};
function App() {
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
                    <li className="botoes-meunu-vertical">
                      <FaHome /> Início</li>
                    <li className="botoes-meunu-vertical">
                      <FaAngleDoubleUp /> Em alta</li>
                    <li className="botoes-meunu-vertical ultimo-item">
                      <FaPenSquare /> Inscrições</li>
                  </div>
                  </ul>
                <ul>
                  <div>
                    <li className="botoes-meunu-vertical">
                      <FaYoutube /> Originais</li>
                    <li className="botoes-meunu-vertical">
                      <FaCircleNotch /> Histórico</li>
                  </div>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>{titulo}</h4>
                    <p>Descrição do vídeo vem aqui</p>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="" />
                    <h4>{titulo}</h4>
                    <p>Descrição do vídeo vem aqui</p>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt="" />
                    <h4>{titulo}</h4>
                    <p>Descrição do vídeo vem aqui</p>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt="" />
                    <h4>{titulo}</h4>
                    <p>Descrição do vídeo vem aqui</p>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt="" />
                    <h4>{titulo}</h4>
                    <p>Descrição do vídeo vem aqui</p>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt="" />
                    <h4>{titulo}</h4>
                    <p>Descrição do vídeo vem aqui</p>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt="" />
                    <h4>{titulo}</h4>
                    <p>Descrição do vídeo vem aqui</p>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt="" />
                    <h4>{titulo}</h4>
                    <p>Descrição do vídeo vem aqui</p>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div >
  );
}

export default App;
