import React from 'react'
import { Row } from "reactstrap"
import { Link } from "react-router-dom";

const GameOver = ({ restartGame, timeLeft }) => (
  <div>
    <Row className="justify-content-center">
      {!timeLeft === 0 ?
        <h2 style={{ fontFamily: "cobolbold" }}>Bravo !</h2> :
        <h2 style={{ fontFamily: "cobolbold" }}>Perdu !</h2>
      }
    </Row>

    <Row className="justify-content-center">
      <Link className="back-button" to="/tableau-de-jeux">
        Retour
        </Link>
      <button className="back-button" onClick={restartGame}>Rejouer ?</button>
    </Row>
  </div>
)

export default GameOver