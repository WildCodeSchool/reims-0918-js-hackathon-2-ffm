import React, { Component } from "react";
import "./App.css";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Container fluid className="App position-relative">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Container>
    );
  }
}

export default App;
