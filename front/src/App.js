import React, { Component } from "react";
import "./App.css";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import PumpItUp from "./components/PumpItUp";

class App extends Component {
  render() {
    return (
      <Container fluid className="App position-relative">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tableau-de-jeux" component={Dashboard} />
          <Route path="/jeu-pump-it-up" component={PumpItUp} />
        </Switch>
        <Footer />
      </Container>
    );
  }
}

export default App;
