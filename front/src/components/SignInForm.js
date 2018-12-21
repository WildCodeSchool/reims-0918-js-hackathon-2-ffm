import React from "react"
import { Field, reduxForm } from "redux-form"

let SignInForm = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="email">Email</label>
      <Field name="email" component="input" type="email"></Field>
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <Field name="password" component="input" type="password"></Field>
    </div>
    <button type="submit">SignIn</button>
  </form>
}

SignInForm = reduxForm({
  form: 'signIn'
})(SignInForm)

export default SignInForm