import { useEffect, useState } from "react";
import { getProfileToChoose, choosePerson } from "../../services/requests";
import Profile from "../../components/Profile/Profile";
import {RiUserHeartFill, RiUserHeartLine} from 'react-icons/ri';
import { ContainerIP, HeaderContainer, MatchIcon,LogoIcon } from "./style";
import {FaUserAstronaut} from 'react-icons/fa';


const InitialPage = (props) => {
    const [profileToChoose, setProfileToChoose] = useState('')
    useEffect(
        () => {
            {getProfileToChoose(setProfileToChoose)}
        }, []
    )

    const like = (id) => {
        getProfileToChoose(setProfileToChoose)
        choosePerson (id)
    }
    const deslike = () => {
        getProfileToChoose(setProfileToChoose)

    }


    return (
        <ContainerIP>
                <HeaderContainer>
                    <LogoIcon><FaUserAstronaut /><p>stro</p><span>Match</span></LogoIcon>
                    
                    
                    <MatchIcon onClick={props.goToMatchPage}
                    ><span><RiUserHeartFill /> </span></MatchIcon>
                </HeaderContainer>

                <Profile profile={profileToChoose} like={like} deslike={deslike}/>
            
        </ContainerIP>
    )
}

export default InitialPage