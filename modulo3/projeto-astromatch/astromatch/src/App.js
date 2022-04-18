import { useState } from "react";
import ChatPage from "./pages/ChatPage/ChatPage";
import InitialPage from "./pages/InitialPage/InitialPage";
import MatchPage from "./pages/MatchePage/MatchPage";


function App() {
  const [page, setPage] = useState('initialPage')
  const [info, setInfo]=useState({})

  const goToMatchPage = () => {
    setPage('matchPage')
  }

  const goToInitialPage = () => {
    setPage('initialPage')
  }
  const goToChatPage = (item) => {
    setPage('chatPage')
    setInfo(item)
  }

  const renderPage = () => {
    switch(page){
      case 'initialPage':
        return <InitialPage  goToMatchPage = {goToMatchPage}/>
      case 'matchPage':
        return <MatchPage goToInitialPage = {goToInitialPage} goToChatPage ={goToChatPage}/>
      case 'chatPage':
        return <ChatPage goToMatchPage = {goToMatchPage} infoMatch = {info}/>
    }
  }
  
  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
