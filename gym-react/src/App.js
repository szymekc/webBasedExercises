import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Gallery from "./components/Gallery";
import Dashboard from "./components/Dashboard";
import "./components/css.css";
import gym from "./assets/gym.jpg";

const App = () => (
  <div className="App">
    <Router>
      <header style={{ "text-align": "center", color: "red" }}>
        <div style={{ position: "relative", "text-align": "center" }}>
          <a href="/gallery">
            <img
              src={gym}
              style={{ width: "100%", height: "150px" }}
              alt="Main page"
            />
          </a>
          <div
            class="banner"
            style={{
              "font-family": "impact",
              "font-size": "72px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            Gallery
          </div>
        </div>
      </header>
      <nav></nav>
      <Switch>
        <Route exact path="/register">
          <></>
        </Route>
        <Route exact path="/staff">
          <></>
        </Route>
        <Route exact path="/pricing">
          <></>
        </Route>
        <Route exact path="/contact">
          <></>
        </Route>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  </div>
);
// function App() {
//   return <div className="App">Gym app</div>;
// }

export default App;
