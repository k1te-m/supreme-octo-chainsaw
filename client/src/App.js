import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import GlobalStyle from "./components/GlobalStyle";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <GlobalStyle />
      <Router>
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
          {/* <Route exact path="/about">
            <About />
          </Route> */}
        </Switch>
      </Router>
      <ParticlesBg  color="#ffa500" type="cobweb" num={35} bg={true} />
    </div>
    
  );
}

export default App;
