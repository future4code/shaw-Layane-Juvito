import React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { SignupContainer, TextContainer, MainContainer, TextDecoration, TextInfo } from './style'
import { GlobalContext } from '../../global/GlobalContext'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import Header from '../../components/header/Header'

const SignUpPage = () => {
    const [values, setValues] = React.useState({
        showPassword: false,
        postLogin: false
    });
    const [form, setForm] = React.useState({
        password: '',
        email: '',
    });

    const navigate = useNavigate()

    const { states, setters, requests } = React.useContext(GlobalContext);
    const { token, loading, keepLogin } = states
    const { setToken, setkeepLogin } = setters
    const { postRequest } = requests

    React.useEffect(() => {
        token && window.localStorage.setItem('token', token)
    }, [token])

    React.useEffect(() => {
        token && navigate('/feed')
    }, [loading])

    const handleChange = (prop) => (event) => {
        setForm({ ...form, [prop]: event.target.value });
    };

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
        setForm({
            password: '',
            email: '',
        })
    }


    return (
        <>
            <Header />
            {
                !loading ?
                    <SignupContainer>
                        <TextContainer>
                            <p>Olá, boas vindas ao LabEddit ;)</p>
                        </TextContainer>

                        <MainContainer>

                            <Box component={"form"} onSubmit={handleButtonClick} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px', width: '80%' }}>

                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Nome"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    value={form.name}
                                    onChange={handleChange('name')}
                                />

                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="E-mail"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={form.email}
                                    onChange={handleChange('email')}
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
                                        onChange={handleChange('password')}
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
                                            value={keepLogin}
                                            onChange={((event) => setkeepLogin(event.target.checked))}
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

                        </MainContainer>
                    </SignupContainer>
                    :
                    <SignupContainer>
                        <CircularProgress color="secondary" />
                    </SignupContainer>
            }
        </>
    )
}

export default SignUpPage