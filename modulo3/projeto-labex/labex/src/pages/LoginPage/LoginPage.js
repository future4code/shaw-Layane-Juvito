import Header from '../../components/Header/Header'
import rocket from '../../assets/rocket.png'
import {FormContainer, LoginPageContainer} from './styled'
import { useEffect, useState } from 'react'
import { postRequest } from '../../services/requests'
import { navigateHome } from '../../routes/coordinator'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import { navigateAdmin } from '../../routes/coordinator'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')
  const [data, setData] = useState('')
  const navigate = useNavigate()

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  useEffect (()=>{
    window.localStorage.setItem('token', token)
    data.success && navigateAdmin(navigate)
  }, [token])

  useEffect (()=>{
    data.success && setToken(data.token)
  }, [data])
  
  const login = () => {
    const body = {
      email:email,
      password:password
    }
    const headers = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    postRequest('login', body, headers, setData, 'logado')
    setEmail('')
    setPassword('')
    
  }
  console.log(data)
  
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
          <FormContainer>
            <label>Acessar área Administrativa</label>
            <input 
              placeholder={'e-mail'} 
              onChange = {onChangeEmail} 
              value = {email} 
            />
            <input 
              placeholder={'senha'}
              onChange = {onChangePassword} 
              value = {password} 
            />
            <button onClick={login}>Entrar</button>
          </FormContainer>

          <img src = {rocket} alt = {'rocket'} />
        </LoginPageContainer>
        <Footer />
      </>
    );
  }
  
  export default LoginPage;