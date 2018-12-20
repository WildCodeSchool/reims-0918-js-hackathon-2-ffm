import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import data from "./data";
import "./Dashboard.css";
import { Grid } from "mauerwerk";
import PlayButton from "./PlayButton";

class Dashboard extends Component {
  render() {
    return (
      <Row>
        <Grid
          className="grid"
          // Arbitrary data, should contain keys, possibly heights, etc.
          data={data}
          // Key accessor, instructs grid on how to fet individual keys from the data set
          keys={d => d.name}
          // Can be a fixed value or an individual data accessor
          heights={d => d.height}
          // Number of columns
          columns={2}
        >
          {(data, maximized, toggle) => (
            <div
              className="cell"
              style={{ backgroundImage: data.css }}
              onClick={toggle}
            >
              {maximized && (
                <div className="details">
                  <span className="title">
                    <h1>
                      <div>{data.name}</div>
                    </h1>
                  </span>
                  <p>{data.description}</p>
                  {data.pictogrammes && (
                    <Row>
                      {data.pictogrammes.map(picto => (
                        <Col>
                          <h3><span>{picto.icon}</span>{picto.name}</</h3>>
                        </Col>
                      ))}
                    </Row>
                  )}
                  <div className="d-flex justify-content-center">
                    <Link to={data.link}>
                      <PlayButton link={data.link} />
                    </Link>
                  </div>
                </div>
              )}
              {!maximized && <div className="default">{data.name}</div>}
            </div>
          )}
        </Grid>
      </Row>
    );
  }
}

export default Dashboard;
