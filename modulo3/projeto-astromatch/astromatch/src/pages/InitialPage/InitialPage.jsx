import { useEffect, useState } from "react";
import { getProfileToChoose, choosePerson } from "../../services/requests";
import Profile from "../../components/Profile/Profile";

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
        <>
            <div>
                <header>
                    astrodev
                    <button onClick={props.goToMatchPage}>matches</button>
                </header>
                <Profile profile={profileToChoose} like={like} deslike={deslike}/>
            </div>
        </>
    )
}

export default InitialPage