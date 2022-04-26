import logo from '../../assets/logo.png'
import { HeaderContainer } from './styled'


const Header = (props) => {
    return(
        <HeaderContainer>
            <img src={logo} alt={'Logo'} />
            <div>
                <p>{props.firstButton}</p>
                <p>{props.secondButton}</p>

            </div>
        </HeaderContainer>
    )
}

export default Header