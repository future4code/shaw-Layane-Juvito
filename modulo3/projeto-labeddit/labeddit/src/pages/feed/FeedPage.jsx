import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import { useProtectedPage } from '../../hooks/useProtectedPage'


const FeedPage = () => {
    const [logout, setLogout] = useState(false)
    useProtectedPage(logout)

    const userLogout = () => {
        window.localStorage.clear('token')
        setLogout(true)
    }
    return(
        <>
            <Header 
                buttonContent = {'Sair'}
                buttonClick = {() => userLogout()}
            />
        </>
    )
}

export default FeedPage