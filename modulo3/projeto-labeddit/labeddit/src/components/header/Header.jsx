import { Button } from '@mui/material'
import { Gray, LightGray, LightOrange, Orange, HeaderContainer, Logo } from './style'
import CloseSharpIcon from '@mui/icons-material/CloseSharp'
import { useNavigate } from 'react-router-dom'


const Header = ({buttonContent, buttonClick, page}) => {

    const navigate = useNavigate()

    return (

        <HeaderContainer page={page}>

            {page && <Button onClick={()=>navigate('/feed')}>
                <CloseSharpIcon />
            </Button>
            }

            <Logo>
                <Orange></Orange>
                <Gray></Gray>
                <LightOrange></LightOrange>
                <LightGray></LightGray>
            </Logo>

            <Button onClick={buttonClick}>
                {buttonContent}
            </Button>

        </HeaderContainer>
    )
}

export default Header