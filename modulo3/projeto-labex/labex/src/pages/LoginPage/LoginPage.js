import Header from '../../components/Header/Header'
import rocket from '../../assets/astroRocket.png'
import {FormContainer, LoginPageContainer} from './styled'
import { useEffect, useState } from 'react'
import { postRequest } from '../../services/requests'
import { navigateHome } from '../../routes/coordinator'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import { navigateAdmin } from '../../routes/coordinator'

const LoginPage = () => {
  const [token, setToken] = useState('')
  const [data, setData] = useState('')
  const [form, setForm] = useState({
    email:'',
    password:''
  })

  const navigate = useNavigate()

  
  const onChangeInput = (event) => {
    const {name, value} = event.target
    setForm({...form, [name]:value})
  }

  useEffect (()=>{
    window.localStorage.setItem('token', token)
    data.success && navigateAdmin(navigate)
  }, [token])

  useEffect (()=>{
    data.success && setToken(data.token)
  }, [data])
  
  const login = (event) => {
    event.preventDefault()
    const headers = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    postRequest('login', form, headers, 'logado', setData)
    setForm({
      email:'',
      password:''
    }) 
  }
  
    return (
      <>
        <Header 
          firstButton={
            {
              contentText: '',
              function: ''
            }
          }
          secondButton={
            {
              contentText: 'Início',
              function: navigateHome
            }
          }
        />
        <LoginPageContainer>
          <FormContainer onSubmit={login}>
            <label>Acessar área Administrativa</label>
            <input 
              placeholder={'e-mail'} 
              onChange = {onChangeInput} 
              value = {form.email} 
              type = {'email'}
              name = {'email'}
              required
            />
            <input 
              placeholder={'senha'}
              onChange = {onChangeInput} 
              value = {form.password} 
              type = {'password'}
              name = {'password'}
              required
            />
            <button>Entrar</button>
          </FormContainer>

          <img src = {rocket} alt = {'rocket'} />
        </LoginPageContainer>
        <Footer />
      </>
    );
  }
  
  export default LoginPage;