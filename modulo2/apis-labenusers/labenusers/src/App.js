import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import UserRegistration from './pages/UserRegistration/UserRegistration';
import UsersList from './pages/UsersList/UsersList';
import { createGlobalStyle } from 'styled-components';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const GlobalStyle = createGlobalStyle`
*{
   
    box-sizing:border-box;
}
  *::-webkit-scrollbar{
    width: 5px;
    height:5px;
  }
  *::-webkit-scrollbar-thumb{
    background-image: linear-gradient(to top, darkblue,blueviolet, rgb(228, 60, 161));
    
    border-radius: 5px;
  }
  
`
const ConfirmContainer = styled.div`
  background-color: whitesmoke;
  padding: 10px;
  border:3px double orange;
  border-radius: 5px;

  p{
    font-size: 0.9rem;
    color: darkblue;
  }
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:20px;
  }
  button{
    border:3px double blueviolet;
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: blueviolet;
    color: white;
    font-weight: bold;
    :hover{
      background-color: transparent;
      color: blueviolet;
    }
  }

`
const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items:center;
  justify-content: center;
  background-color: rgb(61, 61, 67);
`
// variaves base da api
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    "Authorization": 'layane-bastos-shaw'
  }
}
toast.configure()
export default class App extends React.Component {
  state = {
    usersList: [],
    loading: true,
    inputNameController: '',
    inputEmailController: '',
    inputSearchController: '',
    pageRoute: true,
    detailRoute: true,
    user: {}
  }
  componentDidMount = () => {
    this.setState({ loading: true })
    this.getAllUsers()
  }
  getAllUsers = () => {
    this.setState({ loading: true })
    axios.get(baseUrl, headers)
      .then((response) => {
        this.setState({
          usersList: response.data,
          loading: false
        })
      })
      .catch((error) => {
        console.log(error.response.data)
        this.setState({
          loading: false
        })
      })
  }
  getUserById = (id) => {
    this.setState({ loading: true })
    axios.get(`${baseUrl}/${id}`, headers)
      .then((response) => {
        this.setState({
          user: response.data,
          detailRoute: false,
          loading: false

        })
      })
      .catch((error) => {
        console.log(error.response.data.message)
        this.setState({
          loading: false
        })
      })
  }
  searchUsers = () => {
    // &email=${this.inputSearchController}
    this.setState({ loading: true })
    console.log(this.state.inputSearchController)
    axios.get(`${baseUrl}/search?name=${this.state.inputSearchController}`, headers)
      .then((response) => {
        if (response.data.length) {
          this.setState({
            usersList: response.data,
            inputSearchController: '',
            loading: false
          })
        } else {
          toast.warn('Usuário não encontrado')
          this.setState({
            loading: false,
            inputSearchController: '',
          })
        }
      })
      .catch((e) => {
        this.setState({
          loading: false,
          inputSearchController: '',
        })
        toast.error(e.response.data.message)
      })
  }
  addUser = () => {
    const body = {
      "name": this.state.inputNameController,
      "email": this.state.inputEmailController
    }
    this.setState({ loading: true })
    axios.post(baseUrl, body, headers)
      .then(() => {
        this.getAllUsers()
        this.setState({
          inputNameController: '',
          inputEmailController: '',
          loading: false
        })
        toast.success('Usuário cadastrado com sucesso!')
      })
      .catch((e) => {
        toast.error(`${e.response.data.message}`)
        this.setState({
          loading: false
        })
      })
  }
  editUser = (id) => {
    this.setState({ loading: true })
    let body
    if (this.state.inputNameController !== '' && this.state.inputEmailController !== '') {
      body = {
        "name": this.state.inputNameController,
        "email": this.state.inputEmailController
      }
    } else if (this.state.inputNameController !== '' && this.state.inputEmailController === '') {
      body = {
        "name": this.state.inputNameController
      }
    } else if (this.state.inputNameController === '' && this.state.inputEmailController !== '') {
      body = {
        "email": this.state.inputEmailController
      }
    } else {
      this.setState({ loading: false })
      return toast.warn('Você não realizou nenhuma alteração no usuário!')
    }
    axios.put(`${baseUrl}/${id}`, body, headers)
      .then(() => {
        toast.success('Usuário editado com sucesso!!')
        this.getAllUsers()
        this.getUserById(id)
        this.setState({
          loading: false,
          inputEmailController: '',
          inputNameController: '',
        })
      })
      .catch((e) => {
        toast.error(`${e.response.data.message}`)
        this.setState({
          loading: false
        })
      })
  }
  deleteUser = async (id) => {
    this.setState({ loading: true })
    try {
      await axios.delete(`${baseUrl}/${id}`, headers)
      this.getAllUsers()
      this.setState({
        loading: false
      })
      toast.success('Usuário deletado!')
    }
    catch (e) {
      toast.error(`${e.response.data.message}`)
      this.setState({
        loading: false
      })
    }
  }
  pageRoute = () => {
    this.setState({ pageRoute: !this.state.pageRoute })
  }
  detailRouteChange = () => {
    this.setState({ detailRoute: true })
    this.getAllUsers()
  }
  onChangeInputName = (event) => {
    this.setState({
      inputNameController: event.target.value
    })
  }
  onChangeInputSearch = (event) => {
    this.setState({
      inputSearchController: event.target.value
    })
  }
  onChangeInputEmail = (event) => {
    this.setState({
      inputEmailController: event.target.value
    })
  }
  confirm = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <ConfirmContainer>
            <p>Tem certeza que deseja excluir este usuário?</p>
            <div>
              <button onClick={onClose}>
                Não
              </button>
              <button
                onClick={() => {
                  this.deleteUser(id);
                  onClose();
                }}
              >
                Sim
              </button>
            </div>
          </ConfirmContainer>
        );
      }
    });

  };
  render() {
    return (
      <MainContainer>
        <GlobalStyle />
        {this.state.pageRoute ?
          <UserRegistration
            addUser={this.addUser}
            pageRoute={this.pageRoute}
            onChangeInputName={this.onChangeInputName}
            onChangeInputEmail={this.onChangeInputEmail}
            inputNameController={this.state.inputNameController}
            inputEmailController={this.state.inputEmailController}
          />
          :
          <UsersList
            user={this.state.user}
            loading={this.state.loading}
            usersList={this.state.usersList}
            pageRoute={this.pageRoute}
            getAllUsers={this.getAllUsers}
            editUser={this.editUser}
            deleteUser={this.deleteUser}
            confirm={this.confirm}
            searchUsers={this.searchUsers}
            detailRoute={this.state.detailRoute}
            getUserById={this.getUserById}
            detailRouteChange={this.detailRouteChange}
            onChangeInputName={this.onChangeInputName}
            onChangeInputEmail={this.onChangeInputEmail}
            onChangeInputSearch={this.onChangeInputSearch}
            inputNameController={this.state.inputNameController}
            inputEmailController={this.state.inputEmailController}
            inputSearchController={this.state.inputSearchController}
          />
        }
      </MainContainer>
    );
  }

}
