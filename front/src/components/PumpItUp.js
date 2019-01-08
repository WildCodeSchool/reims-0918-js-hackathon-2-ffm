import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./PumpItUp.css";
import logoSaintEx from "../img/logo-stex-web.svg";
import balloon from "../img/balloon.png";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "./RedButton.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import ls from "local-storage";
import { Spring } from "react-spring";

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
    if (ls.get("jwt-saint-ex")) {
      axios.put(
        "/api/score",
        { game_name: "pumpItUp", score: `${this.state.sec}` },
        {
          headers: {
            accept: "application/json",
            authorization: `Bearer ${ls.get("jwt-saint-ex")}`
          }
        }
      );
    }
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
      <Spring
        from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
        to={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
        config={{ delay: 200 }}
      >
        {props => (
          <div style={props}>
            <h2 className="activity-title">#PumpItUp!</h2>

            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ delay: 800 }}
            >
              {props => (
                <Link
                  style={props}
                  className="back-button"
                  to="/tableau-de-jeux"
                >
                  Retour
                </Link>
              )}
            </Spring>
            <Row style={{ height: "37vh" }}>
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
                    <button
                      className="push--flat"
                      onClick={() => this.inflateBalloon(pumpItUp)}
                    >
                      Gonfler le ballon
                    </button>
                  ) : (
                    <h2 style={{ fontFamily: "cobolbold" }}> Perdu</h2>
                  )
                ) : (
                  <h2 style={{ fontFamily: "cobolbold" }}>
                    <i className="fas fa-trophy" /> Gagné{" "}
                    <i className="fas fa-trophy" />
                  </h2>
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
                      Temps restant {"  "}
                      <FontAwesomeIcon icon="clock" /> {countDown}''
                    </strong>
                  </div>
                )}
              </Col>
            </Row>
          </div>
        )}
      </Spring>
    );
  }
}

export default PumpItUp;
