import React, { Component, Fragment } from "react";
import SignInForm from "./SignInForm";
import axios from "axios";
import { Row, Col } from "reactstrap"
import { Link } from "react-router-dom"
import ls from "local-storage";
import { withRouter } from "react-router-dom";

class SignIn extends Component {
  submit = values => {
    axios.post("/signin", values).then(results => {
      if (results) {
        ls.set("jwt-saint-ex", results.data.token);
        this.props.setFlashMessage(results.data.flashMessage);
        this.props.history.push("/");
      }
    });
  };
  render() {
    return (
      <Fragment>
        <Row className="d-flex justify-content-between">
          <h2 className="activity-title">#Connection</h2>
          <Link className="back-button" to="/">
            Retour
        </Link>
        </Row>
        <Row>
          <Col xs={{ size: 12, offset: 0 }} sm={{ size: 6, offset: 3 }}>
            <SignInForm onSubmit={this.submit} />
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default withRouter(SignIn);
