import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "reactstrap";

import "./Arcade.css";

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
        { index: 17, type: "end", use: false }
      ],
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
      clearInterval(this.interval);
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

      clearInterval(this.interval);
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
      clearInterval(this.interval);
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
      clearInterval(this.interval);
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
    this.setState({ started: true });
    this.countdown();
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
    if (diff === 0) {
      this.stop();
    }
    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    document.addEventListener("keydown", event => this.keyDown(event), false);
  }
  render() {
    const iconSVG = (
      <svg
        aria-hidden="true"
        data-prefix="fas"
        data-icon="running"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 416 512"
      >
        <path
          fill="currentColor"
          d="M272 96c26.51 0 48-21.49 48-48S298.51 0 272 0s-48 21.49-48 48 21.49 48 48 48zM113.69 317.47l-14.8 34.52H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h77.45c19.25 0 36.58-11.44 44.11-29.09l8.79-20.52-10.67-6.3c-17.32-10.23-30.06-25.37-37.99-42.61zM384 223.99h-44.03l-26.06-53.25c-12.5-25.55-35.45-44.23-61.78-50.94l-71.08-21.14c-28.3-6.8-57.77-.55-80.84 17.14l-39.67 30.41c-14.03 10.75-16.69 30.83-5.92 44.86s30.84 16.66 44.86 5.92l39.69-30.41c7.67-5.89 17.44-8 25.27-6.14l14.7 4.37-37.46 87.39c-12.62 29.48-1.31 64.01 26.3 80.31l84.98 50.17-27.47 87.73c-5.28 16.86 4.11 34.81 20.97 40.09 3.19 1 6.41 1.48 9.58 1.48 13.61 0 26.23-8.77 30.52-22.45l31.64-101.06c5.91-20.77-2.89-43.08-21.64-54.39l-61.24-36.14 31.31-78.28 20.27 41.43c8 16.34 24.92 26.89 43.11 26.89H384c17.67 0 32-14.33 32-32s-14.33-31.99-32-31.99z"
        />
      </svg>
    );
    return (
      <div>
        Arcade
        <Container fluid>
          {this.state.win && (
            <Row>
              <Col>
                <p className="text-center">
                  Félicitation vous avez gagné ! <br />
                  Votre score est de {this.state.sec}
                </p>
              </Col>
            </Row>
          )}
          <Row>
            <Col className="d-flex justify-content-center" xs="12">
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
                      <p className="m-auto" style={{ color: "black" }}>
                        {iconSVG}
                      </p>
                    )}
                  </Col>
                ))}
              </Row>{" "}
            </Col>
          </Row>
          <Row>
            {this.state.started ? (
              <Fragment>
                <Col xs="4" className="text-center">
                  <Button onClick={() => this.moveLeft()}>Left</Button>
                </Col>
                <Col xs="4" className="text-center">
                  <Button onClick={() => this.moveUp()}>Up</Button>
                  <br />
                  <Button onClick={() => this.moveDown()}>Down</Button>
                </Col>
                <Col xs="4" className="text-center">
                  <Button onClick={() => this.moveRight()}>Right</Button>
                </Col>
              </Fragment>
            ) : (
              <Col xs="12" className="text-center">
                <Button onClick={() => this.startGame()}>
                  Démarrer le jeu
                </Button>
              </Col>
            )}
            <Col xs="12" className="text-center">
              {this.state.sec > 0 && (
                <div>
                  <strong>{this.state.sec}</strong>
                </div>
              )}
              {this.state.sec === 0 && <p>Fin</p>}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Arcade;
