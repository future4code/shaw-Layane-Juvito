import { Gray, LightGray, LightOrange, Orange, HeaderContainer, Logo } from "./style"


const Header = () => {

    return (
        <HeaderContainer>
            <Logo>
                <Orange></Orange>
                <Gray></Gray>
                <LightOrange></LightOrange>
                <LightGray></LightGray>

            </Logo>

        </HeaderContainer>
    )
}

export default Header