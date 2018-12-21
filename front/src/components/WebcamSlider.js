import React from "react";
import Slider from "react-slick";
import screenshots from "./screenshots";
import Logo from "../img/logo-stex-web-black.svg";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 3,
  autoplay: true,
  speed: 2000,

  cssEase: "linear"
};
console.log(screenshots);

const WebcamSlider = () => {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        paddingBottom: "80px"
      }}
    >
      <Slider {...settings}>
        {screenshots.map((screenshot, index) => (
          <div key={index} className="polaroid">
            <img alt={screenshot.date} src={screenshot.url} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <h3>{screenshot.date}</h3>
              <img className="logo" src={Logo} alt="logo" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WebcamSlider;
