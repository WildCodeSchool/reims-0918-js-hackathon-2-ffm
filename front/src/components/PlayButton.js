import React from "react";
import "./PlayButton.css";
import { Link } from "react-router-dom";

const PlayButton = props => {
  return (
    <button class="play-button hvr-buzz">
      <span>Jouer au jeu</span>
    </button>
  );
};

export default PlayButton;
