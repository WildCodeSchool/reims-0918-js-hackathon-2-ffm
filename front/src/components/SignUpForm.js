import React from "react"
import { Field, reduxForm } from "redux-form"

let SignUpForm = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="email">Email</label>
      <Field name="email" component="input" type="email"></Field>
    </div>
    <div>
      <label htmlFor="username">Username</label>
      <Field name="username" component="input" type="text"></Field>
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <Field name="password" component="input" type="password"></Field>
    </div>
    <div>
      <label htmlFor="passwordVerif">Verify Password</label>
      <Field name="passwordVerif" component="input" type="password"></Field>
    </div>
    <button type="submit">SignUp</button>
  </form>
}

SignUpForm = reduxForm({
  form: 'signUp'
})(SignUpForm)

export default SignUpForm