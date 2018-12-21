import React, { Component, Fragment } from "react"
import { Row, Col, Table, ButtonGroup, Button, InputGroup, InputGroupAddon, Input } from "reactstrap"
import axios from "axios"

import "./Ranking.css"

const scores = [{
  username: "Toi",
  all: 124,
  pumpitup: 42,
  memory: 212,
  findWord: 6,
  arcade: 234
}, {
  username: "moi",
  all: 23,
  pumpitup: 46212,
  memory: 6,
  findWord: 23,
  arcade: 23664
}, {
  username: "eux",
  all: 142365,
  pumpitup: 32,
  memory: 163,
  findWord: 223,
  arcade: 2334
}, {
  username: "Tout ceux qui le veulent",
  all: 1445,
  pumpitup: 6254,
  memory: 142,
  findWord: 2221,
  arcade: 23424
}, {
  username: "plus",
  all: 141245,
  pumpitup: 4123,
  memory: 112,
  findWord: 22,
  arcade: 2342
}, {
  username: "lui",
  all: 1451,
  pumpitup: 143,
  memory: 111,
  findWord: 12,
  arcade: 2342
}, {
  username: "plus1",
  all: 145,
  pumpitup: 8,
  memory: 1,
  findWord: 2,
  arcade: 234
}, {
  username: "elle",
  all: 145,
  pumpitup: 90,
  memory: 1,
  findWord: 2,
  arcade: 234
}, {
  username: "elle",
  all: 145,
  pumpitup: 90,
  memory: 1,
  findWord: 2,
  arcade: 234
}, {
  username: "elle",
  all: 145,
  pumpitup: 90,
  memory: 1,
  findWord: 2,
  arcade: 234
}, {
  username: "elle",
  all: 145,
  pumpitup: 90,
  memory: 1,
  findWord: 2,
  arcade: 234
}, {
  username: "elle",
  all: 145,
  pumpitup: 90,
  memory: 1,
  findWord: 2,
  arcade: 234,
  rankingList: []
}]

class Ranking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cSelected: [],
      currentGame: "all",
      query: ""
    };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  componentDidMount() {
    axios
      .get("classement")
      .then(res => this.setState({ RankingList: res }))
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
        <Row>
          <h2 className="activity-title">#PumpItUp!</h2>
        </Row>
        <Row>
          <InputGroup>
            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
            <Input value={this.state.query} onChange={(event) => this.handleInputChange(event)} placeholder="username" />
          </InputGroup>
        </Row>

        <Row className="d-flex justify-content-center my-3">
          <ButtonGroup className="gamesStat">
            <Button onClick={() => { this.onRadioBtnClick(1); this.displayGameStat("all") }} active={this.state.rSelected === 1}>PumpItUp</Button>
            <Button onClick={() => { this.onRadioBtnClick(2); this.displayGameStat("memory") }} active={this.state.rSelected === 2}>Memory</Button>
            <Button onClick={() => { this.onRadioBtnClick(3); this.displayGameStat("arcade") }} active={this.state.rSelected === 3}>Arcade</Button>
            <Button onClick={() => { this.onRadioBtnClick(4); this.displayGameStat("bar") }} active={this.state.rSelected === 4}>Bar</Button>
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
                {this.state.query === "" ?
                  scores.sort((a, b) => b[this.state.currentGame] - a[this.state.currentGame]).slice(0, 10).map((score, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{score.username}</td>
                      <td>{score[this.state.currentGame]}</td>
                    </tr>
                  ))
                  :
                  scores.filter(score => score.username.includes(this.state.query)).slice(0, 10).map((score, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{score.username}</td>
                      <td>{score[this.state.currentGame]}</td>
                    </tr>
                  ))
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