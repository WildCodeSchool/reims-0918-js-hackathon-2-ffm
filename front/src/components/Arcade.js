import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import ls from "local-storage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRunning, faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Spring } from "react-spring";
import "./Arcade.css";
library.add(faRunning);

library.add(faClock);

export class Arcade extends Component {
  constructor() {
    super();
    this.state = {
      way_easy: [
        { index: 0, type: "start", use: true },
        { index: 1, type: "block", use: false },
        { index: 2, type: "route", use: false },
        { index: 3, type: "route", use: false },
        { index: 4, type: "route", use: false },
        { index: 5, type: "block", use: false },
        { index: 6, type: "route", use: false },
        { index: 7, type: "block", use: false },
        { index: 8, type: "route", use: false },
        { index: 9, type: "block", use: false },
        { index: 10, type: "route", use: false },
        { index: 11, type: "block", use: false },
        { index: 12, type: "route", use: false },
        { index: 13, type: "route", use: false },
        { index: 14, type: "route", use: false },
        { index: 15, type: "block", use: false },
        { index: 16, type: "route", use: false },
        { index: 17, type: "end", use: false },
        { index: 18, type: "route", use: false },
        { index: 19, type: "block", use: false },
        { index: 20, type: "route", use: false },
        { index: 21, type: "block", use: false },
        { index: 22, type: "route", use: false },
        { index: 23, type: "block", use: false }
      ],
      way_normal: [
        { index: 0, type: "start", use: true },
        { index: 1, type: "block", use: false },
        { index: 2, type: "route", use: false },
        { index: 3, type: "route", use: false },
        { index: 4, type: "route", use: false },
        { index: 5, type: "block", use: false },
        { index: 6, type: "route", use: false },
        { index: 7, type: "block", use: false },
        { index: 8, type: "route", use: false },
        { index: 9, type: "block", use: false },
        { index: 10, type: "route", use: false },
        { index: 11, type: "block", use: false },
        { index: 12, type: "route", use: false },
        { index: 13, type: "route", use: false },
        { index: 14, type: "route", use: false },
        { index: 15, type: "block", use: false },
        { index: 16, type: "route", use: false },
        { index: 17, type: "block", use: false },
        { index: 18, type: "block", use: false },
        { index: 19, type: "block", use: false },
        { index: 20, type: "block", use: false },
        { index: 21, type: "block", use: false },
        { index: 22, type: "route", use: false },
        { index: 23, type: "block", use: false },
        { index: 24, type: "block", use: false },
        { index: 25, type: "route", use: false },
        { index: 26, type: "route", use: false },
        { index: 27, type: "route", use: false },
        { index: 28, type: "route", use: false },
        { index: 29, type: "block", use: false },
        { index: 30, type: "block", use: false },
        { index: 31, type: "block", use: false },
        { index: 32, type: "block", use: false },
        { index: 33, type: "block", use: false },
        { index: 34, type: "route", use: false },
        { index: 35, type: "block", use: false },
        { index: 36, type: "block", use: false },
        { index: 37, type: "end", use: false },
        { index: 38, type: "route", use: false },
        { index: 39, type: "route", use: false },
        { index: 40, type: "route", use: false },
        { index: 41, type: "block", use: false }
      ],
      win: false,
      started: false,
      sec: 10
    };
  }
  moveLeft = () => {
    const position = this.state.way_easy.filter(road => road.use);
    if (
      this.state.way_easy[position[0].index - 1] &&
      this.state.way_easy[position[0].index - 1].type === "route"
    ) {
      const result = [...this.state.way_easy];
      result[position[0].index].use = false;
      result[position[0].index - 1].use = true;
      this.setState({ way: result });
    } else if (
      this.state.way_easy[position[0].index - 1] &&
      this.state.way_easy[position[0].index - 1].type === "end"
    ) {
      const result = [...this.state.way_easy];
      result[position[0].index].use = false;
      result[position[0].index - 1].use = true;
      this.setState({ way: result, win: true, started: false });
      this.stop();
    }
  };
  moveRight = () => {
    const position = this.state.way_easy.filter(road => road.use);
    if (
      this.state.way_easy[position[0].index + 1] &&
      this.state.way_easy[position[0].index + 1].type === "route"
    ) {
      const result = [...this.state.way_easy];
      result[position[0].index].use = false;
      result[position[0].index + 1].use = true;
      this.setState({ way: result });
    } else if (
      this.state.way_easy[position[0].index + 1] &&
      this.state.way_easy[position[0].index + 1].type === "end"
    ) {
      const result = [...this.state.way_easy];
      result[position[0].index].use = false;
      result[position[0].index + 1].use = true;
      this.setState({ way: result, win: true, started: false });
      this.stop();
    }
  };
  moveUp = () => {
    const position = this.state.way_easy.filter(road => road.use);
    if (
      this.state.way_easy[position[0].index - 6] &&
      this.state.way_easy[position[0].index - 6].type === "route"
    ) {
      const result = [...this.state.way_easy];
      result[position[0].index].use = false;
      result[position[0].index - 6].use = true;
      this.setState({ way: result });
    } else if (
      this.state.way_easy[position[0].index - 6] &&
      this.state.way_easy[position[0].index - 6].type === "end"
    ) {
      const result = [...this.state.way_easy];
      result[position[0].index].use = false;
      result[position[0].index - 6].use = true;
      this.setState({ way: result, win: true, started: false });
      this.stop();
    }
  };
  moveDown = () => {
    const position = this.state.way_easy.filter(road => road.use);
    if (
      this.state.way_easy[position[0].index + 6] &&
      this.state.way_easy[position[0].index + 6].type === "route"
    ) {
      const result = [...this.state.way_easy];
      result[position[0].index].use = false;
      result[position[0].index + 6].use = true;
      this.setState({ way: result });
    } else if (
      this.state.way_easy[position[0].index + 6] &&
      this.state.way_easy[position[0].index + 6].type === "end"
    ) {
      const result = [...this.state.way_easy];
      result[position[0].index].use = false;
      result[position[0].index + 6].use = true;
      this.setState({ way: result, win: true, started: false });
      this.stop();
    }
  };

  keyDown(event) {
    if (this.state.started) {
      if (event.keyCode === 40) {
        this.moveDown();
      } else if (event.keyCode === 38) {
        this.moveUp();
      } else if (event.keyCode === 37) {
        this.moveLeft();
      } else if (event.keyCode === 39) {
        this.moveRight();
      }
    }
  }

  startGame() {
    this.setState({ started: true, sec: 10 });
    this.countdown();
  }

  restartGame() {
    this.setState({
      started: false,
      win: false,
      sec: 10,
      way_easy: [
        { index: 0, type: "start", use: true },
        { index: 1, type: "block", use: false },
        { index: 2, type: "route", use: false },
        { index: 3, type: "route", use: false },
        { index: 4, type: "route", use: false },
        { index: 5, type: "block", use: false },
        { index: 6, type: "route", use: false },
        { index: 7, type: "block", use: false },
        { index: 8, type: "route", use: false },
        { index: 9, type: "block", use: false },
        { index: 10, type: "route", use: false },
        { index: 11, type: "block", use: false },
        { index: 12, type: "route", use: false },
        { index: 13, type: "route", use: false },
        { index: 14, type: "route", use: false },
        { index: 15, type: "block", use: false },
        { index: 16, type: "route", use: false },
        { index: 17, type: "end", use: false }
      ]
    });
  }

  countdown() {
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  calculateCountdown() {
    let diff = this.state.sec;
    const timeLeft = {
      sec: 0
    };
    diff -= 1;
    timeLeft.sec = diff;
    if (diff < 0) {
      this.stop();
    } else if (diff === 0) {
      this.stop();
    }
    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
    if (ls.get("jwt-saint-ex")) {
      axios.put(
        "/api/score",
        { game_name: "arcade", score: `${this.state.sec}` },
        {
          headers: {
            accept: "application/json",
            authorization: `Bearer ${ls.get("jwt-saint-ex")}`
          }
        }
      );
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", event => this.keyDown(event), false);
  }
  render() {
    return (
      <div>
        <Spring
          from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
          to={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
          config={{ delay: 200 }}
        >
          {props => (
            <h2 style={props} className="activity-title">
              #TheEscape!
            </h2>
          )}
        </Spring>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 1200 }}
        >
          {props => (
            <Link style={props} className="back-button" to="/tableau-de-jeux">
              Retour
            </Link>
          )}
        </Spring>
        <Container fluid>
          {this.state.win && (
            <Row>
              <Col>
                <p
                  className="text-center"
                  style={{ fontFamily: "cobolbold", fontSize: "20px" }}
                >
                  Félicitation vous avez gagné ! <br />
                  Votre score est de {this.state.sec}
                </p>
              </Col>
            </Row>
          )}
          <Row>
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ delay: 1200 }}
            >
              {props => (
                <Col
                  style={props}
                  className="d-flex justify-content-center"
                  xs="12"
                >
                  <Row style={{ maxWidth: "600px" }}>
                    {this.state.way_easy.map((road, index) => (
                      <Col
                        key={index}
                        xs="2"
                        className={`map ${
                          this.state.started ? "onRunning" : [road.type]
                        }`}
                      >
                        {road.use === true && (
                          <FontAwesomeIcon
                            className="icon-escape"
                            style={{ fontSize: "45px" }}
                            icon="running"
                          />
                        )}
                      </Col>
                    ))}
                  </Row>
                </Col>
              )}
            </Spring>
          </Row>
          <Row>
            {this.state.started ? (
              <Fragment>
                <Col xs="4" className="text-center">
                  <button
                    className="back-button"
                    onClick={() => this.moveLeft()}
                  >
                    <i className="fas fa-long-arrow-alt-left" /> Left
                  </button>
                </Col>
                <Col xs="4" className="text-center">
                  <button className="back-button" onClick={() => this.moveUp()}>
                    Up <i className="fas fa-long-arrow-alt-up" />
                  </button>
                  <br />
                  <button
                    className="back-button"
                    onClick={() => this.moveDown()}
                  >
                    Down <i className="fas fa-long-arrow-alt-down" />
                  </button>
                </Col>
                <Col xs="4" className="text-center">
                  <button
                    className="back-button"
                    onClick={() => this.moveRight()}
                  >
                    Right <i className="fas fa-long-arrow-alt-right" />
                  </button>
                </Col>
              </Fragment>
            ) : this.state.win ? (
              <Col xs="12" className="text-center">
                <button
                  className="back-button"
                  onClick={() => this.restartGame()}
                >
                  Rejouer
                </button>
              </Col>
            ) : (
              <Col xs="12" className="text-center">
                <Spring
                  from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
                  to={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
                  config={{ delay: 200 }}
                >
                  {props => (
                    <button
                      style={props}
                      className="back-button"
                      onClick={() => this.startGame()}
                    >
                      Démarrer le jeu
                    </button>
                  )}
                </Spring>
              </Col>
            )}
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ delay: 1200 }}
            >
              {props => (
                <Col style={props} xs="12" className="text-center">
                  {this.state.sec > 0 && (
                    <div style={{ fontFamily: "cobolbold" }}>
                      <strong>
                        Temps restant {"  "}
                        <FontAwesomeIcon icon="clock" /> {this.state.sec}''
                      </strong>
                    </div>
                  )}
                  {this.state.sec === 0 && (
                    <p style={{ fontFamily: "cobolbold" }}>Fin</p>
                  )}
                </Col>
              )}
            </Spring>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Arcade;
