import Header from '../../components/Header/Header'
import rocket from '../../assets/rocket.png'
import {FormContainer, LoginPageContainer} from './styled'
import { useEffect, useState } from 'react'
import { postRequest } from '../../services/requests'
import { navigateHome } from '../../routes/coordinator'
import Footer from '../../components/Footer/Footer'


const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }
  
  useEffect (()=>{
    localStorage.setItem('token', token)
  }, [token])
  
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
    postRequest('login', body, headers, setToken, 'logado')
    setEmail('')
    setPassword('')
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