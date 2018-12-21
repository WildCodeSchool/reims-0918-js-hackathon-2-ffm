import React from "react"
import { Field, reduxForm } from "redux-form"
import("./Form.css")


let SignUpForm = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}>

    <div class="form-group">
      <label htmlFor="email">Email</label>
      <Field name="email" class="form-control" component="input" type="email" aria-describedby="emailHelp" placeholder="nom@exemple.com"></Field>
    </div>
    <div class="form-group">
      <label htmlFor="email">Email</label>
      <Field name="username" component="input" class="form-control" aria-describedby="pseudoHelp" placeholder="Pseudo" type="text"></Field>
    </div>
    <div class="form-group">
      <label htmlFor="password">Mot de passe</label>
      <Field name="password" class="form-control" placeholder="Password" component="input" type="password"></Field>
    </div>
    <div class="form-group">
      <label htmlFor="passwordVerif">Mot de passe</label>
      <Field name="passwordVerif" class="form-control" placeholder="vérification du Password" component="input" type="password"></Field>
    </div>
    <div className="d-flex justify-content-center">
      <button className="btn" type="submit">S'inscrire</button>
    </div>

  </form >
}

SignUpForm = reduxForm({
  form: 'signUp'
})(SignUpForm)

export default SignUpForm