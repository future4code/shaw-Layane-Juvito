import React from 'react'
import styled,{createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 11px;
    h1{
      font-size: 18px; 
    }
  }
  }
  body{
    background-color:rgb(32, 30, 30);
    color:white;
  }
`
const MainContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top:50px;
  margin: auto;
  height: 100vh;
  @media screen and (min-device-width : 320px) and (max-device-width : 800px) {
    width: 100%;
  }
 
`
const TarefaList = styled.ul`
  padding: 10px;
  width: 80%;
  border: 2px solid orange;
`

const Tarefa = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px;
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
  background-color: ${({ completa }) => (completa ? 'rgb(41, 231, 120)' : '')};
  color: ${({ completa }) => (completa ? 'rgb(48, 46, 46)' : '')};
  list-style: none;
  height: 100%;
  border-radius: 5px;
 
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  width: 80%;
`

const Container = styled.div`
  display: grid;
  grid-template-columns:70% 15% 15%;
  align-items: center;
  padding: 2px;
  margin-top:5px;
  width: 100%;
  /* border:1px solid black ; */
  @media screen and (min-device-width : 320px) and (max-device-width : 800px) {
    grid-template-columns:60% 20% 20%;
  }
`
const Button = styled.button`
  cursor: pointer;
  background-color: orange;
  border: 2px solid orange;
  outline:none;
  font-weight:bold;
  padding:5px;
  margin-left:5px;
  border-radius:5px;
  box-shadow:2px 2px 2px rgb(63, 61, 61);
  :hover{
    border: 2px solid black;
    color:orange;
    background-color: transparent;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 800px) {
    padding: 5px 2px;
  }
`
const Input = styled.input`
  padding:5px 10px;
  border:none;
  outline: none;
  color: orange;
  background-color: rgb(48, 46, 46);
  border-radius:5px 0px 5px 0px;
  font-size: 14px;
  @media screen and (min-device-width : 320px) and (max-device-width : 800px) {
    font-size: 10px;
  }
`
const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Select = styled.select`
  background-color: rgb(48, 46, 46);
  border: none;
  outline: none;
  border-radius:5px;
  color:white;
  font-weight: bold;
  padding: 5px;
`
const Editar = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  @media screen and (min-device-width : 320px) and (max-device-width : 800px) {
    grid-template-columns: 60% 40%;
  }
`
const MensagemInicial = styled.p`
text-align: center;

`
class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    editInputValue: '',
    buscaInputValues: '',
    filtro: '',
    ordemCrescente:false,
    ordemDecrescente:false
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tarefas !== this.state.tarefas) {
      localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
    }
  };

  componentDidMount() {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"));
    tarefasSalvas && this.setState({ tarefas: tarefasSalvas })
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  }
  onChangeEditInput = (event) => {
    this.setState({ editInputValue: event.target.value });
  }
  onChangeBuscaInput = (event) => {
    this.setState({ buscaInputValues: event.target.value });

  }

  criaTarefa = () => {
    const novaTarefa = [...this.state.tarefas];
    novaTarefa.push({
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
      editar: false
    });
    this.setState({ 
      tarefas: novaTarefa,
      inputValue:''
    })
  }

  selectTarefa = (id) => {
    const copiaTarefas = [...this.state.tarefas]; // cópia do state tarefas
    const attCompleta = copiaTarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return {
          ...tarefa,
          completa: !tarefa.completa
        }
      } else {
        return tarefa
      }

    });
    this.setState({ tarefas: attCompleta })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  }

  apagarTarefa = (id) => {
    const copiaTarefas = [...this.state.tarefas] // cópia do state tarefas
    const index = copiaTarefas.findIndex((tarefa) => { return tarefa.id === id })
    copiaTarefas.splice(index, 1)
    this.setState({ tarefas: copiaTarefas })
  }
  editarTarefa = (id) => {
    const copiaTarefas = [...this.state.tarefas] // cópia do state tarefas
    const index = copiaTarefas.findIndex((tarefa) => { return tarefa.id === id })
    copiaTarefas[index].editar = !copiaTarefas[index].editar;
    this.setState({ tarefas: copiaTarefas });
    // this.setState({editar:!this.state.editar})
  }
  atualizarTarefa = (id) => {
    const copiaTarefas = [...this.state.tarefas]; // cópia do state tarefas
    const index = copiaTarefas.findIndex((tarefa) => { return tarefa.id === id });
    copiaTarefas[index].texto = this.state.editInputValue;
    copiaTarefas[index].editar = !copiaTarefas[index].editar;
    this.setState({
      tarefas: copiaTarefas,
      editInputValue: ""
    })
  }
  ordemCrescente = () => {
    this.setState({ordemCrescente:!this.state.ordemCrescente})
  }
  ordemDecrescente = () => {
    this.setState({ordemDecrescente:!this.state.ordemDecrescente})
  }
  apagarTudo = () => {
    this.setState({tarefas:[]})
  }
  render() {

    let listaFiltrada;
    listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    });

    if (this.state.buscaInputValues) {
      listaFiltrada = listaFiltrada.filter(tarefa => {
        return tarefa.texto.includes(this.state.buscaInputValues)
      })
    }
    this.state.ordemCrescente && listaFiltrada.sort((a,b)=>{
      let x=a.texto.toUpperCase(), y=b.texto.toUpperCase();
      return x===y ? 0 : x>y ? 1:-1
    })

    this.state.ordemDecrescente && listaFiltrada.sort((a,b)=>{
      let x=a.texto.toUpperCase(), y=b.texto.toUpperCase();
      return x===y ? 0 : x>y ? -1:1
    })

    return (
      <MainContainer>
        <GlobalStyle />
        <h1>Lista de tarefas</h1>
        <br />
        <InputsContainer>
          <Input 
            value={this.state.inputValue} 
            onChange={this.onChangeInput} 
            placeholder={"Insira uma tarefa"}
          />
          <Button onClick={this.criaTarefa}>Adicionar</Button>
        </InputsContainer>
        <br />
        <InputsContainer>
          <Label>Filtro</Label>
          <Input
            placeholder='Buscar por nome'
            onChange={this.onChangeBuscaInput}
            value={this.state.buscaInputValues}
          />
          <Select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Todas</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </Select>
        </InputsContainer>
        <br />
        <InputsContainer>
          <Button onClick={this.ordemCrescente}>Ordem crescente</Button>
          <Button onClick={this.ordemDecrescente}>Ordem decrescente</Button>
          <Button onClick={this.apagarTudo}>Apagar tudo</Button>
        </InputsContainer>
        <br />
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Container>
                <Tarefa
                  key={tarefa.id}
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
                <Button onClick={() => this.apagarTarefa(tarefa.id)}>Apagar</Button>
                <Button onClick={() => this.editarTarefa(tarefa.id)}>Editar</Button>
                {tarefa.editar &&
                  <Editar>
                    <Input
                      placeholder='Editar tarefa'
                      value={this.state.editInputValue}
                      onChange={this.onChangeEditInput} />
                    <Button onClick={() => this.atualizarTarefa(tarefa.id)}>Atualizar</Button>
                    
                  </Editar>}
              </Container>
            )
          })}
          {!listaFiltrada.length && <MensagemInicial>Você não possui tarefas, adicione algumas!!</MensagemInicial>}
        </TarefaList>
      </MainContainer>
    )
  }
}

export default App
