import React, { Component, Fragment } from "react"
import { Row, Col, Table, ButtonGroup, Button, InputGroup, InputGroupAddon, Input } from "reactstrap"
import { Link } from "react-router-dom"
import axios from "axios"

import "./Ranking.css"


class Ranking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cSelected: [],
      currentGame: "total",
      query: "",
      rankingList: []
    };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  componentDidMount() {
    axios
      .get("/classement")
      .then(res => this.setState({ rankingList: res.data }))
  }

  handleInputChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  displayGameStat(game) {
    this.setState({
      currentGame: game
    })
  }


  render() {
    return (
      <Fragment>
        <Row className="d-flex justify-content-between">
          <h2 className="activity-title">#PumpItUp!</h2>
          <Link className="back-button" to="/">
            Retour
        </Link>
        </Row>
        <Row>
          <Col md={{ size: 6, offset: 3 }} sm={{ size: 10, offset: 1 }}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input value={this.state.query} onChange={(event) => this.handleInputChange(event)} placeholder="username" />
            </InputGroup>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center my-3">
          <ButtonGroup className="gamesStat">
            <Button onClick={() => { this.onRadioBtnClick(1); this.displayGameStat("total") }} active={this.state.rSelected === 1}>Total</Button>
            <Button onClick={() => { this.onRadioBtnClick(2); this.displayGameStat("memory") }} active={this.state.rSelected === 2}>Memory</Button>
            <Button onClick={() => { this.onRadioBtnClick(3); this.displayGameStat("arcade") }} active={this.state.rSelected === 3}>Arcade</Button>
            <Button onClick={() => { this.onRadioBtnClick(4); this.displayGameStat("pumpItUp") }} active={this.state.rSelected === 4}>PumpItUp</Button>
            <Button onClick={() => { this.onRadioBtnClick(5); this.displayGameStat("findWord") }} active={this.state.rSelected === 5}>???</Button>
          </ButtonGroup>
        </Row>
        <Row>
          <Col md={{ size: 6, offset: 3 }} sm={{ size: 10, offset: 1 }}>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Pseudo</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {!this.state.rankingList.length < 1 ?
                  <Fragment>
                    {this.state.query === "" ?
                      this.state.rankingList.sort((a, b) => b[this.state.currentGame] - a[this.state.currentGame]).slice(0, 10).map((score, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{score.username}</td>
                          <td>{score[this.state.currentGame]}</td>
                        </tr>
                      ))
                      :
                      this.state.rankingList.filter(score => score.username.includes(this.state.query)).slice(0, 10).map((score, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{score.username}</td>
                          <td>{score[this.state.currentGame]}</td>
                        </tr>
                      ))}
                  </Fragment>
                  : ""
                }


              </tbody>
            </Table>
          </Col>
        </Row>

      </Fragment>
    )
  }
}

export default Ranking