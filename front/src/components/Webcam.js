import React, { Fragment } from "react";
import Webcam from "react-webcam";
class WebcamGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { screenshot: "" };
  }
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc);
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <Fragment>
        <h2 className="activity-title">#PumpItUp!</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <Webcam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={videoConstraints}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <button onClick={this.capture}>Capture photo</button>
        </div>
      </Fragment>
    );
  }
}

export default WebcamGame;
