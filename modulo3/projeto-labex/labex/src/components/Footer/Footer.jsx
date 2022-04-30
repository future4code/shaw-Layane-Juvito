import { FooterContainer } from "./styled"
import {FaFacebook} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'



const Footer = () => {
    return (
        <FooterContainer>
            <p>&copy; Desenvolvido por Layane Bastos</p>
            <div>
                <a href={'https://www.facebook.com/'} target={"_blank"}><FaFacebook /></a>
                <a href={'https://github.com/LayaneB'} target={"_blank"}><BsGithub /></a> 
                <a href={'https://www.instagram.com/'} target={"_blank"}> <RiInstagramFill /></a>
            </div>
        </FooterContainer>
    )
}

export default Footer