import { getMatches } from "../../services/requests"
import { useState, useEffect } from "react"
import MatchItem from "../../components/MatchItem/MatchItem"


const MatchPage = (props) => {
    const [matchList,setMatchList] = useState([])
    useEffect(
        () => {
            getMatches(setMatchList)
        },[]
    )


    return(
        <>
            <button onClick={props.goToInitialPage}>Home</button>
            {matchList.map((item=>{
                return <MatchItem key = {item.id} match={item} goToChatPage={props.goToChatPage}/>
            }))}
        </>
    )
}

export default MatchPage