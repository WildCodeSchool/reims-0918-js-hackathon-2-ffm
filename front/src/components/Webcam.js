import React, { Fragment } from "react";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";
import "./Webcam.css";
import formatDate from "./formatDate";
import Logo from "../img/logo-stex-web-black.svg";
import WebcamSlider from "./WebcamSlider";
import axios from "axios";
import { Spring } from "react-spring";

class WebcamGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { screenshot: "init", date: "", screenshots: [] };
  }

  componentDidMount() {
    this.getScreenshots();
  }

  getScreenshots = () => {
    axios.get("/api/webcam").then(res => {
      this.setState({ screenshots: res.data.screenshots });
    });
  };

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    const newDate = formatDate(Date.now());
    this.setState({ screenshot: imageSrc, date: newDate });
  };

  reset = () => {
    this.setState({ screenshot: "init", date: "" });
    this.getScreenshots();
  };

  save = () => {
    axios.post(
      "/api/webcam",
      {
        url: this.state.screenshot,
        date: this.state.date
      },
      this.reset(),
      this.getScreenshots()
    );
  };

  render() {
    return (
      <Fragment>
        <Spring
          from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
          to={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
          config={{ delay: 200 }}
        >
          {props => (
            <h2 style={props} className="activity-title">
              #Smile!
            </h2>
          )}
        </Spring>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 1200 }}
        >
          {props => (
            <Link style={props} className="back-button" to="/tableau-de-jeux">
              Retour
            </Link>
          )}
        </Spring>
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
              {" "}
              <Spring
                from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
                to={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
                config={{ delay: 200 }}
              >
                {props => (
                  <button
                    style={props}
                    className="back-button"
                    onClick={this.capture}
                  >
                    Capture
                  </button>
                )}
              </Spring>
            </div>
          </div>
        ) : (
          <Fragment>
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
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="back-button polaroid-final"
                onClick={this.reset}
              >
                Beurk !
              </button>
              <button
                className="back-button polaroid-final"
                onClick={this.save}
              >
                Sauvegarder
              </button>
            </div>
          </Fragment>
        )}

        <WebcamSlider screenshots={this.state.screenshots} />
      </Fragment>
    );
  }
}

export default WebcamGame;
