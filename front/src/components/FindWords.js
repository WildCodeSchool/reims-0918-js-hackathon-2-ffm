import React, { Component, Fragment } from "react";
import { Row, Col } from "reactstrap";
import "./FindWords.css";

export class FindWords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      case_letters: { first: [], second: [] },
      letters: ["a", "i", "n", "t", "E"],
      word: {
        S: { find: true },
        a: { find: false },
        i: { find: false },
        n: { find: false },
        t: { find: false },
        "-": { find: true },
        E: { find: false },
        x: { find: true }
      },

      number_find: 0
    };
  }
  case_letters = [];

  getRandomNumber = length => Math.floor(Math.random() * Math.floor(length));

  generate_place_letter() {
    const deck = [];
    const listNumberRandom = [];
    for (let i = 0; i < 5; i++) {
      const randomN = this.getRandomNumber(20);
      if (!listNumberRandom.includes(randomN)) {
        listNumberRandom.push(randomN);
        deck.push({ letter: this.state.letters[i], position: randomN });
      } else {
        i--;
      }
    }
    return deck;
  }

  find_letter(index, letter_find) {
    if (letter_find === "a" && this.state.number_find === 0) {
      const letter = { ...this.state.word };
      letter["a"].find = true;
      this.setState({
        word: letter,
        number_find: this.state.number_find + 1
      });
    } else if (letter_find === "i" && this.state.number_find === 1) {
      const letter = { ...this.state.word };
      letter["i"].find = true;
      this.setState({
        word: letter,
        number_find: this.state.number_find + 1
      });
    } else if (letter_find === "n" && this.state.number_find === 2) {
      const letter = { ...this.state.word };
      letter["i"].find = true;
      this.setState({
        word: letter,
        number_find: this.state.number_find + 1
      });
    } else if (letter_find === "t" && this.state.number_find === 3) {
      const letter = { ...this.state.word };
      letter["i"].find = true;
      this.setState({
        word: letter,
        number_find: this.state.number_find + 1
      });
    } else if (letter_find === "E" && this.state.number_find === 4) {
      const letter = { ...this.state.word };
      letter["i"].find = true;
      this.setState({
        word: letter,
        number_find: this.state.number_find + 1
      });
    } else {
      this.setState({
        word: {
          S: { find: true },
          a: { find: false },
          i: { find: false },
          n: { find: false },
          t: { find: false },
          "-": { find: true },
          E: { find: false },
          x: { find: true }
        },
        number_find: 0
      });
    }
  }

  componentDidMount() {
    const position_letter = this.generate_place_letter();
    for (let i = 0; i < 20; i++) {
      const letter = position_letter.filter(letter => {
        return letter.position === i;
      });
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
      }
    });
  }
  render() {
    return (
      <div>
        <h2>Find Words</h2>
        {this.case_letters.length > 1 ? (
          <Row style={{ paddingRight: "10px" }}>
            <Col xs="12" className="text-center">
              <h3>
                {Object.keys(this.state.word).map((letter, index) =>
                  this.state.word[letter].find ? (
                    <span key={index} style={{ color: "white" }}>
                      {letter}
                    </span>
                  ) : (
                    <span key={index} style={{ color: "black" }}>
                      {letter}
                    </span>
                  )
                )}
              </h3>
            </Col>
            <Col xs="12" sm="6">
              <Row>
                {this.state.case_letters.first.map((letter, index) => (
                  <Fragment key={index}>
                    {letter.letter ? (
                      !this.state.word[letter.letter].find ? (
                        <Col
                          xs={{ size: "2", offset: letter.offset }}
                          className="case_letter"
                          onClick={() => this.find_letter(index, letter.letter)}
                        >
                          <div
                            id={index}
                            className={
                              this.state.word[letter.letter].find
                                ? "case_letter_find case_letter_filling text-center"
                                : "case_letter_filling text-center"
                            }
                          >
                            <h2>{letter.letter ? letter.letter : ""}</h2>
                          </div>
                        </Col>
                      ) : (
                        <Col
                          xs={{ size: "2", offset: letter.offset }}
                          className="case_letter"
                        >
                          <div
                            id={index}
                            className={
                              this.state.word[letter.letter].find
                                ? "case_letter_find case_letter_filling text-center"
                                : "case_letter_filling text-center"
                            }
                          >
                            <h2>{letter.letter ? letter.letter : ""}</h2>
                          </div>
                        </Col>
                      )
                    ) : (
                      <Col
                        xs={{ size: "2", offset: letter.offset }}
                        className="case_letter"
                      >
                        <div className="case_letter_filling text-center">
                          <h2>{letter.letter ? letter.letter : ""}</h2>
                        </div>
                      </Col>
                    )}
                  </Fragment>
                ))}
              </Row>
            </Col>
            <Col xs="12" sm="6">
              <Row>
                {this.state.case_letters.second.map((letter, index) => (
                  <Fragment key={index}>
                    {letter.letter ? (
                      <Col
                        xs={{ size: "2", offset: letter.offset }}
                        className="case_letter"
                        onClick={() => this.find_letter(index, letter.letter)}
                      >
                        <div
                          id={index}
                          className={
                            this.state.word[letter.letter].find
                              ? "case_letter_find case_letter_filling text-center"
                              : "case_letter_filling text-center"
                          }
                        >
                          <h2>{letter.letter ? letter.letter : ""}</h2>
                        </div>
                      </Col>
                    ) : (
                      <Col
                        xs={{ size: "2", offset: letter.offset }}
                        className="case_letter"
                      >
                        <div className="case_letter_filling text-center">
                          <h2>{letter.letter ? letter.letter : ""}</h2>
                        </div>
                      </Col>
                    )}
                  </Fragment>
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
