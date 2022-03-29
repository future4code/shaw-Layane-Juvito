import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 60%;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
  list-style: none;
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`
const TarefasContainer=styled.div`
  border: 1px solid black;
  width: 80%;
  display: flex;
  flex-direction: column;
`
const Container=styled.div`
  display: grid;
  grid-template-columns:50% 25% 25%;
  align-items: center;
  /* gap:10px; */
  margin: 5px;
  width: 100%;
  border:1px solid black ;
`

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filtro: ''
  }

  componentDidUpdate(prevProps,prevState) {
    if(prevState.tarefas !== this.state.tarefas){
      localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
    }
  };

  componentDidMount() {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"));
    tarefasSalvas && this.setState({tarefas: tarefasSalvas})
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  criaTarefa = () => {
    const novaTarefa = [...this.state.tarefas];
    novaTarefa.push({
      id: Date.now(),
      texto: this.state.inputValue,
      completa:false
    });
    this.setState({ tarefas: novaTarefa })
  }

  selectTarefa = (id) => {
    const copiaTarefas = [...this.state.tarefas];
    const attCompleta= copiaTarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return {...tarefa,
                completa:!tarefa.completa}
      }else{
        return tarefa
      }

    });
    this.setState({tarefas:attCompleta})
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  }

  apagarTarefa = (id) => {
    const copiaTarefas =[...this.state.tarefas]
    const index=copiaTarefas.findIndex((tarefa)=>{return tarefa.id===id})
    copiaTarefas.splice(index,1) 
    this.setState({tarefas:copiaTarefas})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
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
                <button onClick={()=>this.apagarTarefa(tarefa.id)}>Apagar</button>
                <button>Editar</button>
              </Container>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
