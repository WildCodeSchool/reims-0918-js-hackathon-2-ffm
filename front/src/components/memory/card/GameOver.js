import React from 'react'

const GameOver = ({ restartGame }) => (
  <div>
    <h1>Bravo !</h1>
    <button className="restart-button" onClick={restartGame}>Rejouer ?</button>
  </div>
)

export default GameOver