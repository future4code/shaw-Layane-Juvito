import { Button } from '@mui/material'
import { Gray, LightGray, LightOrange, Orange, HeaderContainer, Logo } from './style'


const Header = ({buttonContent, buttonClick}) => {
    return (
        <HeaderContainer>
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