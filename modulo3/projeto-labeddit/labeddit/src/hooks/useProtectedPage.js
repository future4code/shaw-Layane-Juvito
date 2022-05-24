import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../global/GlobalContext';


export const useProtectedPage = (logout) => {
    const { setters } = useContext(GlobalContext);
    const { setToken } = setters
    const navigate = useNavigate()

    useEffect(() => {
        const tokenNow = window.sessionStorage.getItem('token')
        setToken(tokenNow)
        !tokenNow && navigate('/login')

    },[navigate, logout])
    
}