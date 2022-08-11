import { HeaderProps } from "../../interfaces/HeaderProps"
import { Button, HeaderContainer, Input } from "./style"
import {MdPersonSearch} from 'react-icons/md'

const Header = (props: HeaderProps) => {

    const {onChange, search, onClick} = props
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
        </HeaderContainer>
      
    )
}

export default Header