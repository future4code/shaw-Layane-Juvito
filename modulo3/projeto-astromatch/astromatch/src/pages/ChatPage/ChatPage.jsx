

const ChatPage = (props) => {
    return (
        <>
        <button onClick={props.goToMatchPage}>voltar</button>
        <div>
            <p>{props.infoMatch.name}</p>
        </div>
        </>
    )
}

export default ChatPage