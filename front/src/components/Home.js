import React, { Component } from "react";
import { Navbar as NavMenu } from "./Navbar";
import MainTitle from "./MainTitle";
import { Collapse, Navbar, NavbarToggler } from 'reactstrap';

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

    return (
      <React.Fragment>
        <MainTitle />
        <Navbar expand="md" style={{ position: "initial", padding: 0 }}>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" style={{ position: "absolute", top: 10, right: 0 }}>
            <i className="fas text-white fa-bars"></i>
          </NavbarToggler>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <NavMenu />
          </Collapse>
        </Navbar>


      </React.Fragment>
    );
  }

}


export default Home;
