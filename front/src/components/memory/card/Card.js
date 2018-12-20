import React from "react"
import ReactCardFlip from "react-card-flip"
import { Col, Button } from "reactstrap"

const Card = ({ id, isFlipped, handleClick, cardNumber }) => (
  <Col xs="3">
    <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={1}>

      <Button id={id} className={`card card-front ${cardNumber !== -1 ? "" : "hide-card"}`} onClick={handleClick} key="front">
      </Button>

      <Button id={id} className={`card card-back text-center ${cardNumber !== -1 ? "" : "hide-card"}`} onClick={handleClick} key="back">
        {cardNumber}
      </Button>

    </ReactCardFlip>
  </Col>

)

export default Card