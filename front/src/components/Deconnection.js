import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Deconnection extends Component {
  componentDidMount() {
    this.props.history.push("/");
  }
  render() {
    return <div />;
  }
}

export default withRouter(Deconnection);
