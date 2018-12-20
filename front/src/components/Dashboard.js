import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import data from "./data";
import "./Dashboard.css";
import { Grid } from "mauerwerk";
import PlayButton from "./PlayButton";

class Dashboard extends Component {
  render() {
    console.log(document.location);
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
                    <Row
                      className="d-flex mt-4 justify-content-between"
                      style={{ width: "75%", margin: "0 auto" }}
                    >
                      {data.pictogrammes.map(picto => (
                        <Col
                          xs="4"
                          className="d-flex ateliers align-middle  justify-content-start"
                        >
                          <div
                            style={{ width: "80px" }}
                            className="d-flex  justify-content-center"
                          >
                            <img
                              style={{ maxHeight: "60px" }}
                              alt={picto.name}
                              src={
                                process.env.PUBLIC_URL +
                                `/img/${picto.icon}.svg`
                              }
                            />
                          </div>

                          <span className="picto-name mt-3">
                            {picto.name && picto.name}
                          </span>
                        </Col>
                      ))}
                    </Row>
                  )}
                  {data.rules && (
                    <Fragment>
                      <h3 className="rules">
                        <i class="fas fa-info-circle" />Règles du jeu
                      </h3>
                      <p>{data.rules}</p>
                    </Fragment>
                  )}
                  <div className="d-flex justify-content-center">
                    <Link to={data.link}>
                      <PlayButton link={data.link} />
                    </Link>
                  </div>
                </div>
              )}
              {!maximized && (
                <div className="default" style={{ textAlign: "center" }}>
                  #{data.name}
                </div>
              )}
            </div>
          )}
        </Grid>
      </Row>
    );
  }
}

export default Dashboard;
