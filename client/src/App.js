import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/Landing';
import GlobalStyle from "./components/GlobalStyle"
import Loading from "./components/Loading"

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
