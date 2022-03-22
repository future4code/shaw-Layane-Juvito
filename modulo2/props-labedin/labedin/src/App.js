import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import labpetro from './img/labpetro.png';
import Formacao from './components/Fomacao/Formacao';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail} from 'react-icons/md';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/50851374?v=4" 
          nome="Layane Bastos" 
          descricao="Oi, eu sou Lay. Sou aluna da Labenu, estudante do curso de desenvolvimento web fullstack. Adoro filmes, animes e séries."
        />
        <ImagemButton 
          imagem={"https://cdn-icons-png.flaticon.com/512/117/117472.png"} 
          texto="Ver mais"
        />

      </div>
      <div className="page-section-container">
        <CardPequeno icon={<MdEmail />} nome="E-mail:" descricao="layanejuvito@gmail.com"/>
        <CardPequeno icon={<FaMapMarkerAlt />} nome="Endereço:" descricao="Paraíba"/>
      </div>

      <div className="page-section-container">
        <h2>Formação Acadêmica</h2>
        <Formacao
          logo="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eff3d7d4dba18a22ca203c8_Logo_Labenu_vertical.png"
          instituicao = "Labenu"
          curso = "Desenvolvimento Web Fullstack"
          duracao ="2021"
        />
        <Formacao
          logo="https://cdn77.pressenza.com/wp-content/uploads/2014/03/Logo-ufpe-2-2.jpg"
          instituicao = "UFPE"
          curso = "Engenharia Civil"
          duracao ="2018-2021"
        />
        <Formacao
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/UfcgBrasao.jpg/1200px-UfcgBrasao.jpg"
          instituicao = "UFCG"
          curso = "Engenharia de Petróleo"
          duracao ="2013-2018"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/28375287?s=200&v=4" 
          nome="Padmec" 
          descricao="Pesquisadora, contribuindo pro desenvolvimento de simuladores de reservatórios de petróleo " 
        />
        <CardGrande 
          imagem={labpetro}
          nome="LabPetro" 
          descricao="Procurando acumulações de água na subsuperfície." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
