import React, { Component } from "react";
import "./App.css";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Memory from "./components/memory/Memory";

class App extends Component {
  render() {
    return (
      <Container fluid className="App position-relative">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tableau-de-jeux" component={Dashboard} />
          <Route exact path="/memory" component={Memory} />
        </Switch>
        <Footer />
      </Container>
    );
  }
}

export default App;
