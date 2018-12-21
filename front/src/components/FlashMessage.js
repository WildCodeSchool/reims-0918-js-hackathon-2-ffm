import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import "./Arcade.css";
import "./FlashMessage.css";
library.add(faInfo);

export class FlashMessage extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.closeFlashMessage();
    }, 3000);
  }
  render() {
    return (
      <div className={`flashMessage fm_${this.props.flashMessage.type}`}>
        <p>
          <FontAwesomeIcon className="mr-2" icon="info" />
          {this.props.flashMessage.message}
        </p>
      </div>
    );
  }
}

export default FlashMessage;
