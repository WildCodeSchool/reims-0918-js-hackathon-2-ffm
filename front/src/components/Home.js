import React, { Component } from "react";
import { Navbar as NavMenu } from "./Navbar";
import MainTitle from "./MainTitle";
import { Collapse, NavbarToggler } from 'reactstrap';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };

  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {

    let width = window.innerWidth
    if (width < 480) {
      return (
        <React.Fragment>
          <MainTitle />

          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" style={{ position: "absolute", top: 10, right: 0 }}>
            <i className="fas text-white fa-bars"></i>
          </NavbarToggler>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <NavMenu />
          </Collapse>

        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <MainTitle />
          <NavMenu />


        </React.Fragment>
      )
    }
  }
}


export default Home;
