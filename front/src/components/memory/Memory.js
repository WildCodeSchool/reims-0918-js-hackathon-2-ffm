import React, { PureComponent } from "react";
import Card from "./card/Card";
import GameOver from "./card/GameOver";
import { Row, Col } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ls from "local-storage";

import "./Memory.css";

library.add(faClock);

class Memory extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: Array(14).fill(false),
      shuffleCard: Memory.duplicateCard().sort(() => Math.random() - 0.5),
      clickCount: 1,
      prevSelectedCard: -1,
      prevCardId: -1,
      clickable: true,
      sec: 120,
      started: false
    };
    this.stop = this.stop.bind(this);
  }

  static duplicateCard = () => {
    return [0, 1, 2, 3, 4, 5, 6].reduce((preValue, current, index, array) => {
      return preValue.concat([current, current]);
    }, []);
  };

  handleClick = event => {
    event.preventDefault();
    if (!this.state.started) {
      this.countdown();
      this.setState({ started: true });
    }
    if (this.state.clickable) {
      const cardId = event.target.id;
      const newFlipps = this.state.isFlipped.slice();
      this.setState({
        prevSelectedCard: this.state.shuffleCard[cardId],
        prevCardId: cardId
      });
      if (newFlipps[cardId] === false) {
        newFlipps[cardId] = !newFlipps[cardId];
        this.setState(prevState => ({
          isFlipped: newFlipps,
          clickCount: this.state.clickCount + 1
        }));

        if (this.state.clickCount === 2) {
          this.setState({
            clickCount: 1,
            clickable: false
          });
          const prevCardId = this.state.prevCardId;
          const newCard = this.state.shuffleCard[cardId];
          const previousCard = this.state.prevSelectedCard;

          this.isCardMatch(previousCard, newCard, prevCardId, cardId);
        }
      }
    }
  };

  isCardMatch = (card1, card2, card1Id, card2Id) => {
    if (card1 === card2) {
      // const hideCard = this.state.shuffleCard.slice();
      // hideCard[card1Id] = -1
      // hideCard[card2Id] = -1
      setTimeout(() => {
        this.setState(prevState => ({
          // shuffleCard: hideCard,
          clickable: true
        }));
      }, 1300);
    } else {
      const flipBack = this.state.isFlipped.slice();
      flipBack[card1Id] = false;
      flipBack[card2Id] = false;
      setTimeout(() => {
        this.setState(prevState => ({
          isFlipped: flipBack,
          clickable: true
        }));
      }, 1300);
    }
  };

  restartGame = () => {
    this.setState({
      isFlipped: Array(14).fill(false),
      shuffleCard: Memory.duplicateCard().sort(() => Math.random() - 0.5),
      clickCount: 1,
      prevSelectedCard: -1,
      prevCardId: -1,
      sec: 60,
      started: false
    });
  };

  isGameOver = () => {
    return this.state.isFlipped.every(
      (element, index, array) => element !== false
    );
  };

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
    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
    axios.put(
      "/score",
      { game_name: "memory", score: `${this.state.sec}` },
      {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${ls.get("jwt-saint-ex")}`
        }
      }
    );
  }

  render() {
    const countDown = this.state.sec;
    return (
      <div>
        <Row>
          <h2 className="activity-title">#Memory!</h2>
        </Row>

        {this.isGameOver() || this.state.sec === 0 ? (
          <GameOver
            stop={this.stop}
            timeLeft={this.state.sec}
            restartGame={this.restartGame}
          />
        ) : (
          <Row className="d-flex justify-content-around">
            {this.state.shuffleCard.map((cardNumber, index) => (
              <Card
                id={index}
                key={index}
                cardNumber={cardNumber}
                isFlipped={this.state.isFlipped[index]}
                handleClick={this.handleClick}
              />
            ))}
          </Row>
        )}

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

export default Memory;
