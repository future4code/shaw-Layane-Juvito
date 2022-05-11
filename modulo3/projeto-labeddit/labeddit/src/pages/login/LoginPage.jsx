import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { LoginContainer,LogoContainer, Title, SubTitle, Hr, Logo, Orange, Gray, LightOrange, LightGray, MainContainer, LoaderContainer } from './style'
import { GlobalContext } from '../../global/GlobalContext'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import { useForm } from '../../hooks/useForm'

const LoginPage = () => {
    const [values, setValues] = useState({
        showPassword: false
    });

    const { form, onChange } = useForm({
        password: '',
        email: '',
    })

    const navigate = useNavigate()

    const { states, setters, requests } = useContext(GlobalContext);
    const { token, loading } = states
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
        postRequest('users/login', form, headers, setToken)
        
    }


    return (
        <>
            {
                !loading ?
                    <LoginContainer>
                        <LogoContainer>
                            <Logo>
                                <Orange></Orange>
                                <Gray></Gray>
                                <LightOrange></LightOrange>
                                <LightGray></LightGray>
                            </Logo>
                            <Title>LabEddit</Title>
                            <SubTitle>O projeto de rede social da Labenu</SubTitle>
                        </LogoContainer>
                        <MainContainer>
                            <Box component={"form"} onSubmit={handleButtonClick} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap:'10px', width:'85%'}}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="E-mail"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={form.email}
                                    onChange={onChange}

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
                                        value={form.password}
                                        name="password"
                                        onChange={onChange}
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
                             
                                <Button
                                    type="submit"
                                    variant={'primary'}
                                    fullWidth
                                    sx={{ mb: 1, mt: 1}}
                                >
                                    Continuar
                                </Button>

                                <Hr />

                                <Button
                                    variant={'secondary'}
                                    fullWidth
                                    sx={{ mt: 1}}
                                    onClick = {() => navigate('/signup')}
                                >
                                    Criar uma conta!
                                </Button>
                            
                            </Box>
                        </MainContainer>
                        
                    </LoginContainer>
                    :
                    <LoaderContainer>
                        <CircularProgress color="secondary" />
                    </LoaderContainer>
            }
        </>

    )
}

export default LoginPage