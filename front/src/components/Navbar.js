import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export class Navbar extends Component {
  render() {
    const menu = [
      { name: "# Jouer", path: "/tableau-de-jeux" },
      { name: "# Profil", path: "/profil" },
      { name: "# Classement", path: "/classement" }
    ];
    return (
      <div className="main_container_navbar d-flex flex-column align-items-end">
        {menu.map((item, index) => (
          <Link key={index} className="item_navbar my-3 py-1" to={item.path}>
            {item.name}
          </Link>
        ))}
      </div>
    );
  }
}

export default Navbar;
