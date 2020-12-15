import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/Landing';
import GlobalStyle from "./components/GlobalStyle"


function App() {
  return (
    <>
    <GlobalStyle />
    {/* <Loading /> */}
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
