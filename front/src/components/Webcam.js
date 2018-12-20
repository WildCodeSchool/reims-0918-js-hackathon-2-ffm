import React, { Fragment } from "react";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";
import "./Webcam.css";
import formatDate from "./formatDate";
import Logo from "../img/logo-stex-web-black.svg";
const { DateTime } = require("luxon");

class WebcamGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { screenshot: "init", date: "" };
  }
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    const newDate = formatDate(Date.now());
    console.log(newDate);
    this.setState({ screenshot: imageSrc, date: newDate });
  };

  render() {
    return (
      <Fragment>
        <h2 className="activity-title">#TakeAPicture!</h2>
        <Link className="back-button" to="/tableau-de-jeux">
          Retour
        </Link>
        <p style={{ fontFamily: "cobolbold", paddingLeft: "20px" }}>
          Pensez à bien vous centrer dans l'image :)
        </p>
        {this.state.screenshot === "init" ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            <div style={{ width: "250px", overflow: "hidden" }}>
              <Webcam
                audio={false}
                height={350}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={350}
              />
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
              }}
            >
              <button className="back-button" onClick={this.capture}>
                Capture
              </button>
            </div>
          </div>
        ) : (
          <div
            style={{
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap"
            }}
          >
            <h2
              style={{
                width: "100%",
                textAlign: "center",
                display: "block",
                fontFamily: "cobolbold"
              }}
            >
              Votre photo
            </h2>
            <div
              className="polaroid"
              style={{ width: "250px", overflow: "hidden" }}
            >
              <img alt="screenshot" src={this.state.screenshot} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                <h3>{this.state.date}</h3>
                <img className="logo" src={Logo} alt="logo" />
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default WebcamGame;
