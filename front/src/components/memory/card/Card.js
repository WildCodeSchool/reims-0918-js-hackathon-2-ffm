import React from "react"
import ReactCardFlip from "react-card-flip"
import { Button } from "reactstrap"
import Logo from "../../../img/logo-stex-web.svg"


const Card = ({ id, isFlipped, handleClick, cardNumber }) => (

  <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={1}>

    <Button id={id} style={{ backgroundImage: `url(${Logo})`, backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className={`card rounded-circle card-front ${cardNumber !== -1 ? "" : "hide-card"}`} onClick={handleClick} key="front">
    </Button>

    <Button id={id} className={`card rounded-circle card-back text-center ${cardNumber !== -1 ? "" : "hide-card"}`} onClick={handleClick} key="back" >
      <div className="card-back-icn" style={{
        backgroundImage: `url(${
          cardNumber === 0 ?
            (process.env.PUBLIC_URL + "/img/atelier.svg")
            : cardNumber === 1 ?
              (process.env.PUBLIC_URL + "/img/bar.svg")
              : cardNumber === 2 ?
                (process.env.PUBLIC_URL + "/img/expo.svg")
                : cardNumber === 3 ?
                  (process.env.PUBLIC_URL + "/img/fablab.svg")
                  : cardNumber === 4 ?
                    (process.env.PUBLIC_URL + "/img/gouter.svg")
                    : cardNumber === 5 ?
                      (process.env.PUBLIC_URL + "/img/vacances.svg")
                      : cardNumber === 6 ?
                        (process.env.PUBLIC_URL + "/img/experimentation.svg")
                        : ""
          })`
      }}></div>
    </Button>

  </ReactCardFlip>

)

export default Card