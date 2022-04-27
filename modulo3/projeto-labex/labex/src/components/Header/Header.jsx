import logo from '../../assets/logo.png'
import { HeaderContainer } from './styled'
import { useNavigate } from 'react-router-dom'
import { navigateHome } from '../../routes/coordinator'


const Header = (props) => {    
    const navigate = useNavigate()
    return(
        <HeaderContainer>
            <img src={logo} alt={'Logo'} onClick = {()=>navigateHome(navigate)}/>
            <div>
                <p onClick={()=>props.firstButton.function(navigate)}>{props.firstButton.contentText}</p>
                <p onClick={()=>props.secondButton.function(navigate)}>{props.secondButton.contentText}</p>

            </div>
        </HeaderContainer>
    )
}

export default Header