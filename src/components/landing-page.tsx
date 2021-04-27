import React from "react";
import { Grid, Cell } from "react-mdl";

const profile = require("../media/professional_pic.jpeg");

export const LandingPage: React.FC = (): JSX.Element => {
  return (
    <div style={{ width: 50, margin: "auto" }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <h1 style={{ fontFamily: "Oxygen", color: "white" }}>
            Daniel Avedis Masotti
          </h1>
          <img
            src={profile}
            style={{ width: "20%", borderRadius: 10 }}
            alt={"profile"}
          />
          <div className="banner-text">
            <h1>Software Engineer</h1>
            <hr />
            <p>
              {" "}
              Computer Vision, Computer Graphics, and Artificial Intelligence{" "}
            </p>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};
