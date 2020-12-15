import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/Landing';
import GlobalStyle from "./components/GlobalStyle"
import About from './components/About';


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
      </Switch>
    </Router>
    </>
  );
}

export default App;
