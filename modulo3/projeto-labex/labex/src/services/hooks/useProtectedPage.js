import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export const useProtectedPage = (logout) => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = window.localStorage.getItem('token')

        !token && navigate('../login')

    },[navigate, logout])
}