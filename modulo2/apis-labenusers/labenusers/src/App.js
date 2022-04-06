import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import UserRegistration from './pages/UserRegistration/UserRegistration';
import UsersList from './pages/UsersList/UsersList';
import { createGlobalStyle } from 'styled-components';

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
    pageRoute: true,
    detailRoute: true,
    user: {}
  }
  componentDidMount = () => {
    this.getAllUsers()
  }
  getAllUsers = () => {
    axios.get(baseUrl, headers)
      .then((response) => {
        this.setState({
          usersList: response.data,
          loading: false
        })
      })
      .catch((error) => {
        console.log(error.response.data)
      })
  }
  getUserById = (id) => {
    axios.get(`${baseUrl}/${id}`, headers)
      .then((response) => {
        this.setState({
          user: response.data,
          detailRoute: false,
          
        })
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  }
  addUser = () => {
    const body = {
      "name": this.state.inputNameController,
      "email": this.state.inputEmailController
    }
    axios.post(baseUrl, body, headers)
      .then(() => {
        this.getAllUsers()
        this.setState({
          inputNameController:'',
          inputEmailController:'',
        })
        toast.success('Usuário cadastrado com sucesso!')
      })
      .catch((e) => {
        toast.error(`${e.response.data.message}`)
      })
  }
  editUser = (id) => {
    let body 
    if(this.state.inputNameController!=='' && this.state.inputEmailController!==''){
      body= {
        "name": this.state.inputNameController,
        "email": this.state.inputEmailController
      }
    }else if(this.state.inputNameController!=='' && this.state.inputEmailController===''){
      body= {
        "name": this.state.inputNameController
      }
    }else if(this.state.inputNameController==='' && this.state.inputEmailController!==''){
      body= {
        "email": this.state.inputEmailController
      }
    }
    axios.put(`${baseUrl}/${id}`, body,headers)
    .then(()=>{
      toast.success('Usuário editado com sucesso!!')
      this.getAllUsers()
    })
    .catch((e)=>{
      toast.error(`${e.response.data.message}`)
    })
  }
  deleteUser = (id) => {
    const excluir = window.confirm('Tem certeza que deseja deletar este usuário?');
    if (excluir) {
      axios.delete(`${baseUrl}/${id}`, headers)
        .then(() => {
          this.getAllUsers()
          toast.success('Usuário deletado!')
        })
        .catch((e) => {
          toast.error(`${e.response.data.message}`)
        })
    }

  }
  pageRoute = () => {
    this.setState({ pageRoute: !this.state.pageRoute })
  }
  detailRouteChange = () => {
    this.setState({detailRoute:true})
  }
  onChangeInputName = (event) => {
    this.setState({
      inputNameController: event.target.value
    })
  }
  onChangeInputEmail = (event) => {
    this.setState({
      inputEmailController: event.target.value
    })
  }
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
            usersList={this.state.usersList}
            deleteUser={this.deleteUser}
            pageRoute={this.pageRoute}
            user={this.state.user}
            detailRoute = {this.state.detailRoute}
            getUserById = {this.getUserById}
            detailRouteChange = {this.detailRouteChange}
            onChangeInputName={this.onChangeInputName}
            onChangeInputEmail={this.onChangeInputEmail}
            inputNameController={this.state.inputNameController}
            inputEmailController={this.state.inputEmailController}
            editUser={this.editUser}
            loading ={this.state.loading}
          />
        }
      </MainContainer>
    );
  }

}
