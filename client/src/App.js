import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/Landing';
import GlobalStyle from "./components/GlobalStyle"
import About from './components/About';
import Portfolio from './pages/Portfolio';


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
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
