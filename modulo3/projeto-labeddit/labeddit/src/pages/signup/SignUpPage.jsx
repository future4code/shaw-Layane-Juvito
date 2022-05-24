import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Alert, Button, Checkbox, FormControlLabel, Snackbar, TextField } from '@mui/material'
import { SignupContainer, TextContainer, MainContainer, TextDecoration, TextInfo, LoaderContainer } from './style'
import { GlobalContext } from '../../global/GlobalContext'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import Header from '../../components/header/Header'
import { useForm } from '../../hooks/useForm'

const SignUpPage = () => {
    const [values, setValues] = useState({
        showPassword: false,
        postLogin: false,
        agree: false
    });
    const { form, onChange } = useForm({
        username:'',
        password: '',
        email: '',
      })

      const [open, setOpen] = useState(false)
      const [messageError, setMessageError] = useState('')
      const handleClose = (event, reason) => {
          if (reason === 'clickaway') {
              return;
          }
          setOpen(false);
      };

    const navigate = useNavigate()

    const { states, setters, requests } = useContext(GlobalContext);
    const { token, loading} = states
    const { setToken } = setters
    const { postRequest } = requests

    useEffect(() => {
        token && window.sessionStorage.setItem('token', token)
    }, [token])

    useEffect(() => {
        token && navigate('/feed')
    }, [loading])

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleButtonClick = (event) => {
        event.preventDefault();
        const headers = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        postRequest('users/signup', form, headers, setToken, {setOpen,setMessageError})
    }
    return (
        <>
            <Header 
                buttonContent = {'Entrar'}
                buttonClick = {()=>navigate('/login')}
            />
            {
                !loading ?
                    <SignupContainer>
                        
                        <TextContainer>
                            <p>Olá, boas vindas ao LabEddit ;)</p>
                        </TextContainer>

                        <MainContainer>

                            <Box component={"form"} onSubmit={handleButtonClick} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap:'10px', width: '85%' }}>

                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Nome"
                                    name="username"
                                    autoComplete="username"
                                    autoFocus
                                    value={form.username}
                                    onChange={onChange}
                                />
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="E-mail"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={form.email}
                                    onChange={onChange}
                                    inputProps={{ 
                                        pattern: "[a-zA-Z0-9._%+-#&]+@[a-z0-9.-]+.[a-z]{2,}$", 
                                        title: "formato de e-mail inválido: nome@email.com" 
                                    }}
                                />


                                <FormControl
                                    variant="outlined"
                                    required
                                    fullWidth
                                    
                                >
                                    <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        name={'password'}
                                        value={form.password}
                                        onChange={onChange}
                                        inputProps={{ pattern: "^[a-zA-Z0-9\u00C0-\u00FF\.#@$%*& ]{8,}$", title:"A senha deve ter ter entre 8 e 30 caracteres" }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword
                                                        ? <VisibilityOff />
                                                        : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>

                                <TextInfo>Ao continuar, você concorda com o nosso <TextDecoration>Contrato de usuário</TextDecoration> e nossa <TextDecoration>Política de Privacidade</TextDecoration> </TextInfo>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={values.agree}
                                            onChange={((event) => setValues({
                                                ...values,
                                                agree: event.target.checked
                                            }))}
                                            color="primary"
                                        />
                                    }
                                    label={
                                        <Box component="div" fontSize={14} mb={2} mt={2}>
                                            Eu concordo em receber emails sobre coisas legais no Labeddit
                                        </Box>
                                    }
                                    
                                />
                                <Button
                                    type="submit"
                                    variant={'primary'}
                                    fullWidth
                                    sx={{ mb: 1 }}
                                >
                                    Cadastrar
                                </Button>

                            </Box>

                            <Snackbar 
                                open={open} 
                                autoHideDuration={6000} 
                                onClose={handleClose}
                                anchorOrigin={{ vertical:'top', horizontal:'center' }}
                                key={'top' + 'center'}
                            >
                                <Alert onClose={handleClose} severity="warning" sx={{ width: '50%' }}>
                                    {messageError}
                                </Alert>
                            </Snackbar>

                        </MainContainer>

                    </SignupContainer>
                    :
                    <LoaderContainer>
                        <CircularProgress color="secondary" />
                    </LoaderContainer>
            }
        </>
    )
}

export default SignUpPage