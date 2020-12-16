import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/Landing';
import GlobalStyle from "./components/GlobalStyle"
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';



function App() {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Switch>
        <Route exact path="/">
            <Landing />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
