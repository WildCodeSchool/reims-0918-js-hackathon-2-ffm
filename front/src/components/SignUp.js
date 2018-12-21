import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import axios from "axios";
import ls from "local-storage";
import { withRouter } from "react-router-dom";

class SignUp extends Component {
  submit = values => {
    axios.post("/signup", values).then(results => {
      if (results) {
        ls.set("jwt-saint-ex", results.data.token);
        this.props.setFlashMessage(results.data.flashMessage);
        this.props.history.push("/signin");
      }
    });
  };
  render() {
    return <SignUpForm onSubmit={this.submit} />;
  }
}

export default withRouter(SignUp);
