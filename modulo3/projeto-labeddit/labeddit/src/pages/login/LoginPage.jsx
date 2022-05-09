import React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Button, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material'
import { LoginContainer } from './style'
import { GlobalContext } from '../../global/GlobalContext'
import { Link, useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'

const LoginPage = () => {
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
            {
                !loading ?
                    <LoginContainer>
                        <h1>LabEddit</h1>
                        <Box component={"form"} onSubmit={handleButtonClick} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap:'10px'}}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={form.email}
                                onChange={handleChange('email')}

                            />

                            <FormControl 
                                variant="outlined" 
                                required
                            >
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
                            <FormControlLabel
                                control={<Checkbox value={keepLogin}
                                onChange={((event)=>setkeepLogin(event.target.checked))} 
                                color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid>
                                <Link to="/signup" variant="body2">
                                    {"Don't have an account? Sign up!"}
                                </Link>
                            </Grid>
                        </Box>
                        
                    </LoginContainer>
                    :
                    <LoginContainer>
                        <CircularProgress color="secondary" />
                    </LoginContainer>
            }
        </>

    )
}

export default LoginPage