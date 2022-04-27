import { GlobalStyled } from "./styledGlobal";
import { Router } from "./routes/Router";


const App = () => {
  return (
    <div>
      <GlobalStyled />
      <Router />
    </div>
  );
}

export default App;
