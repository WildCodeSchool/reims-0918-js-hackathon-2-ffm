import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import axios from "axios";
import ls from "local-storage";

class SignUp extends Component {
  submit = values => {
    if (values.password !== values.passwordVerif) {
      return console.log("non");
    } else {
      axios.post("/signup", values).then(results => {
        if (results) {
          ls.set("jwt-saint-ex", results.data.token);
          this.props.history.push("/signin");
        }
      });
    }
  };
  render() {
    return <SignUpForm onSubmit={this.submit} />;
  }
}

export default SignUp;
