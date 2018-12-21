import React, { Component } from "react";
import SignInForm from "./SignInForm";
import axios from "axios";
import ls from "local-storage";

class SignIn extends Component {
  submit = values => {
    axios.post("/signin", values).then(results => {
      if (results) {
        ls.set("jwt-saint-ex", results.data.token);
        this.props.history.push("/");
      }
    });
  };
  render() {
    return <SignInForm onSubmit={this.submit} />;
  }
}

export default SignIn;
