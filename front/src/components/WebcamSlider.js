import React from "react";
import Slider from "react-slick";
import Logo from "../img/logo-stex-web-black.svg";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 3,
  autoplay: true,
  speed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

class WebcamSlider extends React.Component {
  render() {
    return (
      this.props.screenshots.length > 0 && (
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            paddingBottom: "80px"
          }}
        >
          <Slider {...settings}>
            {this.props.screenshots.map((screenshot, index) => (
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
      )
    );
  }
}

export default WebcamSlider;
