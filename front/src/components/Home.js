import React, { Component } from "react";
import Navbar from "./Navbar";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h3 className="m-0">Saint-Ex Games</h3>
        </div>
        <Navbar />
      </React.Fragment>
    );
  }
}

export default Home;
