import React, { Component } from "react";
import "./App.css";
import { Container, Row } from "reactstrap";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Dashboard from "./Dashboard";

class App extends Component {
  render() {
    return (
      <Container fluid className="App position-relative">
        <Row>
          <Home />
          <Footer />
          <Dashboard />
        </Row>
      </Container>
    );
  }
}

export default App;
