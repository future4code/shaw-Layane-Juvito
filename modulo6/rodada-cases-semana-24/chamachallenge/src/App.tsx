import GlobalState from './Global/GlobalState';
import { GlobalStyle } from './GlobalStyle';
import Router from './routes/Router'

function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  );
}

export default App;
