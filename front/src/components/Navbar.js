import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div className="main_container_navbar d-flex flex-column align-items-end">
        <Link className="item_navbar my-3 py-1" to="/tableau-de-jeux">
          <i class="fas fa-gamepad" /> Jouer
        </Link>

        <Link className="item_navbar my-3 py-1" to="/profil">
          <i class="fas fa-user" /> Profil
        </Link>

        <Link className="item_navbar my-3 py-1" to="/classement">
          <i class="fas fa-trophy" /> Classement
        </Link>
      </div>
    );
  }
}

export default Navbar;
