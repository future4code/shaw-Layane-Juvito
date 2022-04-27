import { ContainerCP, HeaderContainer, LogoIcon, MatchIcon, BackIcon, InputConatainer, ContainerMensagens, ScrollContainer } from "./style";
import { FaUserAstronaut, FaPeopleArrows } from 'react-icons/fa';
import { RiUserHeartFill, RiSendPlaneFill } from 'react-icons/ri';
import { useEffect, useState } from "react";
import { randomText } from "../../constants/randomText";
import Messages from "../../components/Message/Message";

const ChatPage = (props) => {
    const [inputMessage, setInputMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [send, setSend] = useState(false)

    useEffect(
        () => {
            sendRandomText()
        }, [send]
    )

    const onChaneInputMessage = (event) => {
        setInputMessage(event.target.value)
    }
    const sendTextMessage = () => {
        const addMessage = [{ name: 'eu', text: inputMessage }, ...messages]
        setMessages(addMessage)
        setInputMessage('')
        setSend(!send)
    }
    const sendRandomText = () => {
        const randomIndex = Math.floor(Math.random() * 1.2*10);
        const matchText = randomText[randomIndex];
        const addMessage = [{ name: props.infoMatch.name, text: matchText }, ...messages]
        setMessages(addMessage)
    }
    let renderizarMensagens
    renderizarMensagens = messages.map((message, index) => {
        return <Messages
            key={index}
            id={index}
            message={message}
        />
    })
    return (
        <ContainerCP>
            <HeaderContainer>
                <BackIcon onClick={props.goToInitialPage}><span><FaPeopleArrows /> </span></BackIcon>

                <LogoIcon><FaUserAstronaut /><p>stro</p><span>Match</span></LogoIcon>


                <MatchIcon onClick={props.goToMatchPage}><span><RiUserHeartFill /></span></MatchIcon>
            </HeaderContainer>
            <ContainerMensagens>
                <ScrollContainer>
                    {renderizarMensagens}
                </ScrollContainer>
            </ContainerMensagens>

            <InputConatainer>
                <input placeholder={'Mensagem'} value={inputMessage} onChange={onChaneInputMessage} />
                <span onClick={sendTextMessage}>
                    <RiSendPlaneFill />
                </span>
            </InputConatainer>

        </ContainerCP>
    )
}

export default ChatPage