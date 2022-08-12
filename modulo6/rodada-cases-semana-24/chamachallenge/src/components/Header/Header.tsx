import { HeaderProps } from "../../interfaces/HeaderProps"
import { Button, ButtonHistory, HeaderContainer, Input } from "./style"
import {MdPersonSearch} from 'react-icons/md'
import {RiHistoryLine} from 'react-icons/ri'
import { useNavigate } from "react-router-dom"

const Header = (props: HeaderProps) => {

    const {onChange, search, onClick, goHistory} = props
    const navigate = useNavigate()

    const navigateHistory = () => {
        goHistory()
        navigate('/history')
    }

    return (
        
         <HeaderContainer>
            <Input 
                placeholder={"Buscar"}
                onChange={onChange}
                value={search}
            />

            <Button onClick={onClick}>
                <MdPersonSearch />
            </Button>

            <ButtonHistory onClick={navigateHistory}>
                <RiHistoryLine />
            </ButtonHistory>
        </HeaderContainer>
      
    )
}

export default Header