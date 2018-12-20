import React, { PureComponent } from "react"
import Header from "./header/Header"
import Card from "./card/Card"
import GameOver from "./card/GameOver"
import { Row } from "reactstrap"

import "./Memory.css"

class Memory extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isFlipped: Array(14).fill(false),
      shuffleCard: Memory.duplicateCard().sort(() => Math.random() - 0.5),
      clickCount: 1,
      prevSelectedCard: -1,
      prevCardId: -1,
      clickable: true
    }
  }

  static duplicateCard = () => {
    return [0, 1, 2, 3, 4, 5, 6].reduce((preValue, current, index, array) => {
      return preValue.concat([current, current])
    }, [])
  }

  handleClick = event => {
    event.preventDefault();
    if (this.state.clickable) {
      const cardId = event.target.id;
      const newFlipps = this.state.isFlipped.slice();
      this.setState({
        prevSelectedCard: this.state.shuffleCard[cardId],
        prevCardId: cardId
      })
      if (newFlipps[cardId] === false) {
        newFlipps[cardId] = !newFlipps[cardId]
        this.setState(prevState => ({
          isFlipped: newFlipps,
          clickCount: this.state.clickCount + 1
        }))

        if (this.state.clickCount === 2) {
          this.setState({
            clickCount: 1,
            clickable: false
          });
          const prevCardId = this.state.prevCardId;
          const newCard = this.state.shuffleCard[cardId]
          const previousCard = this.state.prevSelectedCard

          this.isCardMatch(previousCard, newCard, prevCardId, cardId)
        }
      }
    }
  }

  isCardMatch = (card1, card2, card1Id, card2Id) => {
    if (card1 === card2) {
      // const hideCard = this.state.shuffleCard.slice();
      // hideCard[card1Id] = -1
      // hideCard[card2Id] = -1
      setTimeout(() => {
        this.setState(prevState => ({
          // shuffleCard: hideCard,
          clickable: true
        }))
      }, 1300)
    } else {
      const flipBack = this.state.isFlipped.slice()
      flipBack[card1Id] = false
      flipBack[card2Id] = false
      setTimeout(() => {
        this.setState(prevState => ({
          isFlipped: flipBack,
          clickable: true
        }))
      }, 1300)
    }
  }

  restartGame = () => {
    this.setState({
      isFlipped: Array(14).fill(false),
      shuffleCard: Memory.duplicateCard().sort(() => Math.random() - 0.5),
      clickCount: 1,
      prevSelectedCard: -1,
      prevCardId: -1
    })
  }

  isGameOver = () => {
    return this.state.isFlipped.every((element, index, array) => element !== false)
  }
  render() {
    return (
      <div>
        <Header restartGame={this.restartGame} />
        {this.isGameOver() ? <GameOver restartGame={this.restartGame} /> :
          <Row>
            {
              this.state.shuffleCard.map((cardNumber, index) =>
                <Card
                  id={index}
                  key={index}
                  cardNumber={cardNumber}
                  isFlipped={this.state.isFlipped[index]}
                  handleClick={this.handleClick}
                />
              )
            }
          </Row>}

      </div>
    )
  }
}


export default Memory