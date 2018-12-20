import React, { Component } from "react";
import { Button, Row, Col } from "reactstrap";
import "./PumpItUp.css";
import logoSaintEx from "../img/logo-stex-web.svg";
import balloon from "../img/balloon.png";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

library.add(faClock);

class PumpItUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      maxScore: 0,
      sec: 10,
      started: false
    };
  }

  countdown() {
    this.interval = setInterval(() => {
      const sec = this.calculateCountdown();
      sec ? this.setState(sec) : this.stop();
    }, 1000);
  }

  calculateCountdown() {
    let diff = this.state.sec;
    const timeLeft = {
      sec: 0
    };
    diff -= 1;
    timeLeft.sec = diff;
    if (diff === 0) {
      this.stop();
    }
    this.deflateBalloion();
    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  deflateBalloion() {
    const scoreNow = this.state.score - 5;
    const returnScore = scoreNow < 0 ? 0 : scoreNow;
    this.setState({ score: returnScore });
  }

  inflateBalloon(pumpItUp) {
    if (!this.state.started) {
      this.countdown();
      this.setState({ started: true });
    }
    let newScore = pumpItUp.score + 3;
    if (newScore >= 100) {
      newScore = 100;
      this.stop();
    }
    this.setState({
      score: newScore,
      maxScore: pumpItUp.maxScore < newScore ? newScore : pumpItUp.maxScore
    });
  }

  render() {
    const pumpItUp = { score: this.state.score, maxScore: this.state.maxScore };
    const countDown = this.state.sec;
    return (
      <div>
        <h2>Balloon</h2>
        <Row style={{ height: "50vh" }}>
          <Col
            xs={{ size: "10", offset: "1" }}
            sm={{ size: "8", offset: "2" }}
            md={{ size: "6", offset: "3" }}
            className="d-flex align-items-center"
          >
            <div
              className="balloon m-auto p-2 d-flex justify-content-center"
              style={{
                backgroundImage: `url(${balloon})`,
                backgroundSize: "cover",
                width: `${pumpItUp.score * 2.5}px`,
                height: `${pumpItUp.score * 2.5}px`,
                transition: "1.5s"
              }}
            >
              <img
                className="w-75 pb-3"
                src={logoSaintEx}
                alt="logo saint ex"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ size: "10", offset: "1" }}
            sm={{ size: "8", offset: "2" }}
            md={{ size: "4", offset: "4" }}
          >
            <div className="progress mb-3">
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  backgroundColor: "#EF914B",
                  width: `${pumpItUp.score}%`
                }}
                aria-valuenow="15"
                aria-valuemin="0"
                aria-valuemax="100"
              />
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  backgroundColor: "grey",
                  width: `${pumpItUp.maxScore - pumpItUp.score}%`
                }}
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            {pumpItUp.score < 100 ? (
              countDown !== 0 ? (
                <Button onClick={() => this.inflateBalloon(pumpItUp)}>
                  Gonfler le ballon
                </Button>
              ) : (
                <h2> Perdu</h2>
              )
            ) : (
              <h2>Gagné</h2>
            )}
            {/* 
            <p>Mon score : {pumpItUp.score}</p>
            <p>Mon score max : {pumpItUp.maxScore}</p> */}
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            {countDown > 0 && (
              <div>
                <strong>
                  Temps restant
                  <br />
                  <FontAwesomeIcon icon="clock" /> {countDown}''
                </strong>
              </div>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default PumpItUp;
