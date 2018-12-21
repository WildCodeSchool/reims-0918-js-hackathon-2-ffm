import React, { Component } from "react";
import "./App.css";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Arcade from "./components/Arcade";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Memory from "./components/memory/Memory";
import PumpItUp from "./components/PumpItUp";
import FindWords from "./components/FindWords";
import Ranking from "./components/Ranking";
import WebcamGame from "./components/Webcam";

class App extends Component {
  render() {
    return (
      <Container fluid className="App position-relative">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tableau-de-jeux" component={Dashboard} />
          <Route path="/jeu-arcade" component={Arcade} />
          <Route path="/connection" component={SignIn} />
          <Route path="/inscription" component={SignUp} />
          <Route path="/memory" component={Memory} />
          <Route path="/tableau-de-jeux" component={Dashboard} />
          <Route path="/jeu-pump-it-up" component={PumpItUp} />
          <Route path="/jeu-trouver-saint-ex" component={FindWords} />
          <Route path="/tableau-des-scores" component={Ranking} />
          <Route path="/jeu-webcam" component={WebcamGame} />
        </Switch>
        <Footer />
      </Container>
    );
  }
}

export default App;
