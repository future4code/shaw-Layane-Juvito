import { getMatches } from "../../services/requests"
import { useState, useEffect } from "react"
import MatchItem from "../../components/MatchItem/MatchItem"
import { ContainerMP,HeaderContainer, LogoIcon, BackIcon, ScrollContainer,ReloadkIcon } from "./style"
import {FaUserAstronaut, FaPeopleArrows} from 'react-icons/fa'
import {IoReloadCircle} from 'react-icons/io5'
import { clear } from "../../services/requests"
import Loader from '../../components/Loader/Loader'




const MatchPage = (props) => {
    const [matchList,setMatchList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(
        () => {
            getMatches(saveData, setLoading)
        },[]
    )
    
    const saveData = (data) => {
        setMatchList(data)
        setLoading(false)
    }
    const clearAll = () => {
        clear()
        setMatchList([])
    }
    return(
        
        <ContainerMP>
            <HeaderContainer>
                    <ReloadkIcon onClick={clearAll}>
                        <span><IoReloadCircle /></span>
                     </ReloadkIcon>
                    <LogoIcon><FaUserAstronaut /><p>stro</p><span>Match</span></LogoIcon>
                    
                    
                    <BackIcon onClick={props.goToInitialPage}>
                        <span><FaPeopleArrows /></span>
                     </BackIcon>
            </HeaderContainer>
            {
                loading ?
                <Loader />
                :
                <ScrollContainer>
                    {matchList.map((item=>{
                        return <MatchItem key = {item.id} match={item} goToChatPage={props.goToChatPage}/>
                    }))}
                </ScrollContainer>
            }
        </ContainerMP>
    )
}

export default MatchPage