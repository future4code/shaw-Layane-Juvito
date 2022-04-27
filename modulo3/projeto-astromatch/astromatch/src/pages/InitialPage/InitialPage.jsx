import { useEffect, useState } from "react";
import { getProfileToChoose, choosePerson } from "../../services/requests";
import Profile from "../../components/Profile/Profile";
import {RiUserHeartFill} from 'react-icons/ri';
import { ContainerIP, HeaderContainer, MatchIcon,LogoIcon } from "./style";
import {FaUserAstronaut} from 'react-icons/fa';
import { clear } from "../../services/requests";


const InitialPage = (props) => {
    const [loading, setLoading] = useState(true)
    const [profileToChoose, setProfileToChoose] = useState('')

    const [reset, setReset] = useState(false)
    

    useEffect(
        () => {
            getProfileToChoose(saveData, setLoading)
        }, []
    )

    const clearAll = () => {
        clear(setReset)
        getProfileToChoose(saveData,setLoading)
    }

    const saveData = (data) => {
        
        if(data===null){
            setReset(true)
            setLoading(false)
        }else{
            setProfileToChoose(data)
            setLoading(false)
        }
    }
    const like = (profile) => {
        getProfileToChoose(saveData,setLoading)
        choosePerson (profile)
    }
    const deslike = () => {
        getProfileToChoose(saveData, setLoading)

    }


    return (
        <ContainerIP>
                <HeaderContainer>
                    <LogoIcon><FaUserAstronaut /><p>stro</p><span>Match</span></LogoIcon>
                    <MatchIcon onClick={props.goToMatchPage}
                    ><span><RiUserHeartFill /> </span></MatchIcon>
                </HeaderContainer>
              
                <Profile profile={profileToChoose} like={like} deslike={deslike}
                loading = {loading}
                reset = {reset}
                clear = {clearAll}
                />
            
        </ContainerIP>
    )
}

export default InitialPage