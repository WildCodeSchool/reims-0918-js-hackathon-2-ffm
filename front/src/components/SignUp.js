import React, { Component, Fragment } from "react";
import SignUpForm from "./SignUpForm";
import axios from "axios";
import { Row, Col } from "reactstrap"
import { Link } from "react-router-dom"
import ls from "local-storage";

class SignUp extends Component {
  submit = values => {
    if (values.password !== values.passwordVerif) {
      return console.log("non");
    } else {
      axios.post("/signup", values).then(results => {
        if (results) {
          ls.set("jwt-saint-ex", results.data.token);
          this.props.history.push("/connection");
        }
      });
    }
  };
  render() {
    return (
      <Fragment>
        <Row className="d-flex justify-content-between">
          <h2 className="activity-title">#Inscription</h2>
          <Link className="back-button" to="/">
            Retour
      </Link>
        </Row>
        <Row>
          <Col xs={{ size: 12, offset: 0 }} sm={{ size: 6, offset: 3 }}>
            <SignUpForm onSubmit={this.submit} />
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default SignUp;
