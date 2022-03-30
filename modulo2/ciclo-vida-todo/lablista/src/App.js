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
const TarefasContainer = styled.div`
  border: 1px solid black;
  width: 80%;
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
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
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <input
            placeholder='Buscar por nome'
            onChange={this.onChangeBuscaInput}
            value={this.state.buscaInputValues}
          />
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Todas</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <InputsContainer>
          <button onClick={this.ordemCrescente}>Ordem crescente</button>
          <button onClick={this.ordemDecrescente}>Ordem decrescente</button>
          <button onClick={this.apagarTudo}>Apagar tudo</button>
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
                <button onClick={() => this.apagarTarefa(tarefa.id)}>Apagar</button>
                <button onClick={() => this.editarTarefa(tarefa.id)}>Editar</button>
                {tarefa.editar &&
                  <div>
                    <input
                      placeholder='Editar tarefa'
                      value={this.state.editInputValue}
                      onChange={this.onChangeEditInput} />
                    <button onClick={() => this.atualizarTarefa(tarefa.id)}>Atualizar</button>
                  </div>}
              </Container>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
