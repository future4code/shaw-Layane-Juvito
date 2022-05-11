import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import { ErrorMessage, MainContainer } from './style'

const ErrorPage = () => {

    const navigate = useNavigate()

    return (
        <>
            <Header 
                buttonContent = {'Entrar'}
                buttonClick = {()=>navigate('/login')}
            />
            <MainContainer>

                
                <h4>Esta Página não está disponível</h4>
                <ErrorMessage>O link pode não estar funcionando ou <br/> a Página pode ter  sido removida. Verifique <br /> se o link que você está tentando <br/> abrir está correto.</ErrorMessage>
                <Button onClick={()=>navigate(-1)}>
                    Voltar 
                </Button>

            </MainContainer>
        
        </>
    )
}

export default ErrorPage