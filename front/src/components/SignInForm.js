import React from "react";
import { Field, reduxForm } from "redux-form";
import("./Form.css");

let SignInForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <Field
          name="email"
          className="form-control"
          component="input"
          type="email"
          aria-describedby="emailHelp"
          placeholder="nom@exemple.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Mot de passe</label>
        <Field
          name="password"
          className="form-control"
          placeholder="Password"
          component="input"
          type="password"
        />
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn" type="submit">
          Se Connecter
        </button>
      </div>
    </form>
  );
};

SignInForm = reduxForm({
  form: "signIn"
})(SignInForm);

export default SignInForm;
