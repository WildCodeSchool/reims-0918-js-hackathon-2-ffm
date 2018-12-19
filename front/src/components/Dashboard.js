import React, { Component } from "react";
import data from "./data";
import "./Dashboard.css";
import { Grid } from "mauerwerk";

class Dashboard extends Component {
  render() {
    return (
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
                <div className="circle" style={{ background: data.css }} />
                <h1>{data.name}</h1>
                <p>{data.description}</p>
              </div>
            )}
            {!maximized && <div className="default">{data.name}</div>}
          </div>
        )}
      </Grid>
    );
  }
}

export default Dashboard;
