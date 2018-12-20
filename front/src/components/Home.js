import React, { Component } from "react";
import Navbar from "./Navbar";
import { Row, Col, Container } from "reactstrap";
import MainTitle from "./MainTitle";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <MainTitle />
        <Navbar />
      </React.Fragment>
    );
  }
}

export default Home;
