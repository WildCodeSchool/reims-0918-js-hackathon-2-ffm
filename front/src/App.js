import React, { Component } from "react";
import "./App.css";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Arcade from "./components/Arcade";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Memory from "./components/memory/Memory";
import PumpItUp from "./components/PumpItUp";
import FindWords from "./components/FindWords";
import Ranking from "./components/Ranking";
import WebcamGame from "./components/Webcam";
import FlashMessage from "./components/FlashMessage";
import Deconnection from "./components/Deconnection";

class App extends Component {
  constructor() {
    super();
    this.state = {
      flashMessage: {
        open: false,
        message: "",
        type: ""
      }
    };
    this.setFlashMessage = this.setFlashMessage.bind(this);
    this.closeFlashMessage = this.closeFlashMessage.bind(this);
    this.reloadApp = this.reloadApp.bind(this);
  }

  setFlashMessage = flashMessage => {
    this.setState({ flashMessage: { ...flashMessage, open: true } });
  };

  closeFlashMessage = () => {
    this.setState({ flashMessage: { message: "", type: "", open: false } });
  };
  reloadApp() {
    this.forceUpdate();
  }
  render() {
    return (
      <Container fluid className="App position-relative">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                reloadApp={this.reloadApp}
                setFlashMessage={this.setFlashMessage}
              />
            )}
          />
          <Route path="/tableau-de-jeux" component={Dashboard} />
          <Route path="/jeu-arcade" component={Arcade} />
          <Route
            path="/connexion"
            render={() => <SignIn setFlashMessage={this.setFlashMessage} />}
          />
          <Route
            path="/inscription"
            render={() => <SignUp setFlashMessage={this.setFlashMessage} />}
          />
          <Route path="/jeu-memory" component={Memory} />
          <Route path="/tableau-de-jeux" component={Dashboard} />
          <Route path="/jeu-pump-it-up" component={PumpItUp} />
          <Route path="/jeu-trouver-saint-ex" component={FindWords} />
          <Route path="/tableau-des-scores" component={Ranking} />
          <Route path="/jeu-webcam" component={WebcamGame} />
          <Route path="/deconnection" component={Deconnection} />
        </Switch>
        {this.state.flashMessage.open && (
          <FlashMessage
            closeFlashMessage={this.closeFlashMessage}
            flashMessage={this.state.flashMessage}
          />
        )}
      </Container>
    );
  }
}

export default App;
