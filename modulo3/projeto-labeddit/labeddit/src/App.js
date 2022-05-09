import { ThemeProvider } from '@mui/material/styles'
import GlobalState from './global/GlobalState';
import Router from "./routes/router" 
import theme from "./styles/theme"


function App() {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;
