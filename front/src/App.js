import React, { Component } from "react";
import "./App.css";
import { Container, Row } from "reactstrap";

import Footer from "./components/Footer";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Container fluid className="App position-relative">
        <Row>
          <Home />
          <Footer />
        </Row>
      </Container>
    );
  }
}

export default App;
