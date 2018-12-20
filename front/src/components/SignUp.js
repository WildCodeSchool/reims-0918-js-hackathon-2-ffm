import React, { Component } from "react"
import SignUpForm from "./SignUpForm"

class SignUp extends Component {
  submit = values => {
    console.log(values)
  }
  render() {
    return (
      <SignUpForm onSubmit={this.submit} />
    )
  }
}

export default SignUp