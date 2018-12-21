import React, { Component } from "react";
import { Row, Col } from "reactstrap"
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <Row className="main_container_footer fixed-bottom">
        <Col className="pl-5 text-left" xs="6">
          <a href="http://www.saintex-reims.com" alt="Saint Ex Reims">
            # Saint Ex Reims
        </a>
          <a className="mx-2" href="https://www.facebook.com/saintexreims/" alt=""><i class="fab fa-facebook-square"></i></a>

        </Col>
        <Col className="pr-5 text-right" xs="6">
          <div>
            <p>Propulsé par <a href="https://www.linkedin.com/in/fabien-raymond-41227114b/">Fabien</a>, <a href="https://www.linkedin.com/in/florentin-coyard/">Florentin</a> et <a href="https://www.linkedin.com/in/mathieu-thomas-pro/">Mathieu</a></p>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Footer;
