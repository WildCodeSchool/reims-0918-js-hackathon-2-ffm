import React from "react";
import { Button, Row, Col } from "reactstrap";
import "./PumpItUp.css";
const PumpItUp = ({ pumpItUp, inflateBalloon }) => {
  return (
    <div>
      {" "}
      Balloon
      <Row style={{ height: "50vh" }}>
        <Col />
        <Col className="d-flex align-items-center w-50">
          <div
            className="balloon m-auto"
            style={{
              width: `${pumpItUp.score}px`,
              height: `${pumpItUp.score}px`
            }}
          />
        </Col>
        <Col />
      </Row>
      <Row>
        <Col />
        <Col className="text-center">
          {pumpItUp.score < 100 ? (
            <Button onClick={() => inflateBalloon(pumpItUp)}>UP</Button>
          ) : (
            <h2>Gagné</h2>
          )}
        </Col>
        <Col />
      </Row>
    </div>
  );
};

export default PumpItUp;
