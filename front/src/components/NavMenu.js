import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Spring } from "react-spring";

import "./Navbar.css";
import ls from "local-storage";
import { withRouter } from "react-router-dom";

class NavMenu extends Component {
  signout(e) {
    e.preventDefault();
    this.props.toggleNavbar();
    ls.clear();
    this.props.setFlashMessage({
      type: "success",
      message: "Vous êtes maintenant déconnecté."
    });
    this.props.reloadApp();
    this.props.history.push("/deconnection");
  }
  render() {
    return (
      <div className="main_container_navbar d-flex flex-column align-items-end">
        <Spring
          from={{ opacity: 0, transform: "translate3d(100px,0,0)" }}
          to={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
          config={{ delay: 3000 }}
        >
          {props => (
            <div style={props}>
              <Link className="item_navbar my-3 py-1" to="/tableau-de-jeux">
                <i className="fas fa-gamepad" /> Jouer
              </Link>
            </div>
          )}
        </Spring>
        {!ls.get("jwt-saint-ex") ? (
          <Fragment>
            <Spring
              from={{ opacity: 0, transform: "translate3d(100px,0,0)" }}
              to={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
              config={{ delay: 3200 }}
            >
              {props => (
                <div style={props}>
                  <Link className="item_navbar my-3 py-1" to="/connexion">
                    <i className="fas fa-sign-in-alt" /> Se connecter
                  </Link>
                </div>
              )}
            </Spring>

            <Spring
              from={{ opacity: 0, transform: "translate3d(100px,0,0)" }}
              to={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
              config={{ delay: 3400 }}
            >
              {props => (
                <div style={props}>
                  <Link className="item_navbar my-3 py-1" to="/inscription">
                    <i className="fas fa-user-plus" /> S'inscrire
                  </Link>
                </div>
              )}
            </Spring>
          </Fragment>
        ) : (
          <Spring
            from={{ opacity: 0, transform: "translate3d(100px,0,0)" }}
            to={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
            config={{ delay: 3300 }}
          >
            {props => (
              <div style={props}>
                <Link
                  className="item_navbar my-3 py-1"
                  to="/"
                  onClick={e => this.signout(e)}
                >
                  <i className="fas fa-sign-out-alt" /> Se déconnecter
                </Link>
              </div>
            )}
          </Spring>
        )}

        <Spring
          from={{ opacity: 0, transform: "translate3d(100px,0,0)" }}
          to={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
          config={{ delay: 3600 }}
        >
          {props => (
            <div style={props}>
              <Link className="item_navbar my-3 py-1" to="/tableau-des-scores">
                <i className="fas fa-trophy" /> Classement
              </Link>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}

export default withRouter(NavMenu);
