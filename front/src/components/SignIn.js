import React, { Component } from "react"
import SignInForm from "./SignInForm"

class SignIn extends Component {
  submit = values => {
    fetch('http://localhost:5000/signin', values)
  }
  render() {
    return (
      <SignInForm onSubmit={this.submit} />
    )
  }
}

export default SignIn