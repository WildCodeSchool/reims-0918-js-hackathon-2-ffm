import React from "react";
import "./MainTitle.scss";
import { Link } from "react-router-dom";

const MainTitle = () => {
  return (
    <div
      style={{
        height: "100vh",
        justifyContent: "center",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div className="main-title">
        <Link to={"/jeu-trouver-saint-ex"}>
          <svg viewBox="0 -170 700 300">
            <symbol id="s-text">
              <text textAnchor="middle" x="50%" y="35%" className="text--line">
                Saint-Ex
              </text>
            </symbol>

            <g className="g-ants">
              <use href="#s-text" className="text-copy" />
              <use href="#s-text" className="text-copy" />
              <use href="#s-text" className="text-copy" />
              <use href="#s-text" className="text-copy" />
              <use href="#s-text" className="text-copy" />
            </g>
          </svg>
          <h3>Culture Numérique</h3>
        </Link>
      </div>
    </div>
  );
};

export default MainTitle;
