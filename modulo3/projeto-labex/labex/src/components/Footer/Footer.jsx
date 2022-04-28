import { FooterContainer } from "./styled"
import {FaFacebook} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'



const Footer = () => {
    return (
        <FooterContainer>
            <FaFacebook />
            <BsGithub />
            <RiInstagramFill />

        </FooterContainer>
    )
}

export default Footer