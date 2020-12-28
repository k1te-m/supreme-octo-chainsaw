import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ParticlesBg from "particles-bg";
import AlertState from "./context/Alert/AlertState";
import Alert from "./components/Alerts";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GlobalStyle />
      <AlertState>
        <Router>
          <Alert />
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
        <ParticlesBg color="#ffa500" type="cobweb" num={35} bg={true} />
      </AlertState>
    </div>
  );
}

export default App;
