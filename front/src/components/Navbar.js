import React, { Component } from "react";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    const menu = [
      { name: "# Jouer", path: "/jouer" },
      { name: "# Profil", path: "/profil" },
      { name: "# Classement", path: "/classement" }
    ];
    return (
      <div className="main_container_navbar d-flex flex-column align-items-end">
        {menu.map((item, index) => (
          <div key={index} className="item_navbar my-3 py-1">
            <h3 className="p-0 m-0">{item.name}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default Navbar;
