import { getMatches } from "../../services/requests"
import { useState, useEffect } from "react"
import MatchItem from "../../components/MatchItem/MatchItem"
import { ContainerMP,HeaderContainer, LogoIcon, BackIcon, ScrollContainer } from "./style"
import {FaUserAstronaut, FaPeopleArrows} from 'react-icons/fa'




const MatchPage = (props) => {
    const [matchList,setMatchList] = useState([])
    useEffect(
        () => {
            getMatches(setMatchList)
        },[]
    )


    return(
        <ContainerMP>
            <HeaderContainer>
                    <LogoIcon><FaUserAstronaut /><p>stro</p><span>Match</span></LogoIcon>
                    
                    
                    <BackIcon onClick={props.goToInitialPage}>
                        <span><FaPeopleArrows /></span>
                     </BackIcon>
            </HeaderContainer>
            <ScrollContainer>
                {matchList.map((item=>{
                    return <MatchItem key = {item.id} match={item} goToChatPage={props.goToChatPage}/>
                }))}
            </ScrollContainer>
        </ContainerMP>
    )
}

export default MatchPage