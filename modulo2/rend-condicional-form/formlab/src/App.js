import React from "react";
import Home from "./pages/Home/Home";
import EtapaUm from "./pages/EtapaUm/EtapaUm";
import EtapaDois from "./pages/EtapaDois/EtapaDois";
import EtapaTres from "./pages/EtapaTres/EtapaTres";
import EtapaFinal from "./pages/EtapaFinal/EtapaFinal";
import { GlobalStyle, MainContainer, Obrigatorio } from "./style/StyleGlobalApp/StyleGlobalApp";

export default class App extends React.Component {
  state = {
    etapa: "",
    // ========== controle dos dados de entrada (criação das propriedade no state) =============
    valorInputPergunta1: "",
    valorInputPergunta2: "",
    valorInputPergunta3: "",
    valorInputPergunta4: "1",
    valorInputPergunta5: "",
    valorInputPergunta6: "",
    // =========================================================================================
    campoObrigatorio:"",
    respostas:[]
  }

  // ========= controle dos dados de entrada (criação das funções do evento onChange) ==========
  onChangePergunata1 = (event) => {
    this.setState({ valorInputPergunta1: event.target.value })
  }
  onChangePergunata2 = (event) => {
    this.setState({ valorInputPergunta2: event.target.value })
  }
  onChangePergunata3 = (event) => {
    this.setState({ valorInputPergunta3: event.target.value })
  }
  onChangePergunata4 = (event) => {
    this.setState({ valorInputPergunta4: event.target.value })
  }
  onChangePergunata5 = (event) => {
    this.setState({ valorInputPergunta5: event.target.value })
  }
  onChangePergunata6 = (event) => {
    this.setState({ valorInputPergunta6: event.target.value })
  }
  // =========================================================================================

  // ============ Navegação entre as páginas (atualização do state etapa) ====================
  irParaEtapa1 = (event) => {
    event.preventDefault();
    this.setState({ etapa: "1" })
  }
  irParaProximaEtapa = (event) => {
    event.preventDefault();
    if (this.state.valorInputPergunta1 && this.state.valorInputPergunta2 && this.state.valorInputPergunta3) {
      (this.state.valorInputPergunta4 === "1" || this.state.valorInputPergunta4 === "2") ?
        this.setState({ 
          etapa: "3",
          campoObrigatorio:"" })
        :
        this.setState({ 
          etapa: "2",
          campoObrigatorio:"" })
    } else {
      alert("Você deve preencher todas as perguntas antes de continuar");
      this.setState({campoObrigatorio:<Obrigatorio>Campo Obrigatório</Obrigatorio>})
    }

  }
  irParaEtapaFinal = (event) => {
    event.preventDefault();
    if (this.state.valorInputPergunta5 ) {
      this.setState({ etapa: "4" });
      this.setState({respostas:[this.state.valorInputPergunta1, this.state.valorInputPergunta2, this.state.valorInputPergunta3, this.state.valorInputPergunta4, this.state.valorInputPergunta5, this.state.valorInputPergunta6]});
    } else {
      alert("Você deve preencher todas as perguntas antes de continuar");
      this.setState({campoObrigatorio:<Obrigatorio>Campo Obrigatório</Obrigatorio>})
    }
  }
  voltarAoInicio = (event) => {
    event.preventDefault();
    this.setState({
      etapa: "",
      valorInputPergunta1: "",
      valorInputPergunta2: "",
      valorInputPergunta3: "",
      valorInputPergunta4: "",
      valorInputPergunta5: "",
      valorInputPergunta6: ""
    });
  }
  // =========================================================================================

 

  render() {
    // ================= Renderização da página de acordo com a etapa ==========================
    let renderizatela;
    switch (this.state.etapa) {
      case "1":
        renderizatela =
          <EtapaUm
            irParaProximaEtapa={this.irParaProximaEtapa}
            onChangePergunata1={this.onChangePergunata1}
            onChangePergunata2={this.onChangePergunata2}
            onChangePergunata3={this.onChangePergunata3}
            onChangePergunata4={this.onChangePergunata4}
            valorInputPergunta1={this.state.valorInputPergunta1}
            valorInputPergunta2={this.state.valorInputPergunta2}
            valorInputPergunta3={this.state.valorInputPergunta3}
            valorInputPergunta4={this.state.valorInputPergunta4}
            campoObrigatorio = {this.state.campoObrigatorio}
          />
        break;
      case "2":
        renderizatela =
          <EtapaDois
            irParaEtapaFinal={this.irParaEtapaFinal}
            onChangePergunata5={this.onChangePergunata5}
            onChangePergunata6={this.onChangePergunata6}
            valorInputPergunta5={this.state.valorInputPergunta5}
            valorInputPergunta6={this.state.valorInputPergunta6}
            campoObrigatorio = {this.state.campoObrigatorio}
          />
        break;
      case "3":
        renderizatela =
          <EtapaTres
            voltarAoInicio={this.irParaEtapaFinal}
            onChangePergunata5={this.onChangePergunata5}
            onChangePergunata6={this.onChangePergunata6}
            valorInputPergunta5={this.state.valorInputPergunta5}
            valorInputPergunta6={this.state.valorInputPergunta6}
            campoObrigatorio = {this.state.campoObrigatorio}
          />
        break;
      case "4":
        renderizatela =
          <EtapaFinal
            voltarAoInicio={this.voltarAoInicio}
            respostas={this.state.respostas}
            campoObrigatorio = {this.state.campoObrigatorio}
          />
        break;
      default:
        renderizatela =
          <Home
            irParaEtapaUm={this.irParaEtapa1}
          />
        break;
    }
    // =========================================================================================
    return (
      <MainContainer>
        <GlobalStyle />
        {renderizatela}
      </MainContainer>
    );
  }
}
