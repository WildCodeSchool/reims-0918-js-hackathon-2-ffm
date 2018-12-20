import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./FindWords.css";

export class FindWords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      case_letters: { first: [], second: [] },
      letters: ["a", "i", "n", "t", "E"],
      position_letter: []
    };
  }
  case_letters = [];

  getRandomNumber = length => Math.floor(Math.random() * Math.floor(length));

  generate_place_letter() {
    let oneCard = 0;
    const deck = [];
    const listNumberRandom = [];
    for (let i = 0; i < 5; i++) {
      const randomN = this.getRandomNumber(20);
      if (!listNumberRandom.includes(randomN)) {
        oneCard = randomN;
        listNumberRandom.push(randomN);
        deck.push({ letter: this.state.letters[i], position: randomN });
      } else {
        i--;
      }
    }
    return deck;
  }
  componentDidMount() {
    const position_letter = this.generate_place_letter();
    for (let i = 0; i < 20; i++) {
      const letter = position_letter.filter(letter => {
        return letter.position === i;
      });
      console.log(letter);
      const currentLetter = letter[0]
        ? {
            offset: Math.ceil(Math.random() * Math.floor(3)),
            letter: letter[0].letter
          }
        : {
            offset: Math.ceil(Math.random() * Math.floor(3))
          };
      this.case_letters = [...this.case_letters, currentLetter];
    }
    this.setState({
      case_letters: {
        first: this.case_letters.slice(0, 10),
        second: this.case_letters.slice(10)
      },
      position_letter
    });
    console.log(position_letter);
  }
  render() {
    return (
      <div>
        <h2>Find Words</h2>
        {this.case_letters.length > 1 ? (
          <Row style={{ paddingRight: "10px" }}>
            <Col xs="12" sm="6">
              <Row>
                {this.state.case_letters.first.map((letter, index) => (
                  <Col
                    xs={{ size: "2", offset: letter.offset }}
                    className="case_letter"
                    key={index}
                  >
                    <div className="case_letter_remplissage text-center">
                      <h2>{letter.letter ? letter.letter : ""}</h2>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col xs="12" sm="6">
              <Row>
                {this.state.case_letters.second.map((letter, index) => (
                  <Col
                    xs={{ size: "2", offset: letter.offset }}
                    className="case_letter"
                    key={index}
                  >
                    <div className="case_letter_remplissage text-center">
                      <h2>{letter.letter ? letter.letter : ""}</h2>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        ) : (
          <p>non</p>
        )}
      </div>
    );
  }
}

export default FindWords;
