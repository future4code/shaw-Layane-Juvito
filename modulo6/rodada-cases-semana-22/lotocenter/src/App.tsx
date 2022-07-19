import React from 'react'
import Logo from './components/logo/Logo';
import Home from './pages/Home/Home';
import { GlobalStyle } from './theme/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
