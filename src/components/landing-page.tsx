import React from "react";
import { Grid, Cell } from "react-mdl";
// import avatar from "./avatar.jpg";
const profile = require("../media/professional_pic.jpeg");

export const LandingPage: React.FC = (): JSX.Element => {
  return (
    <div style={{ width: 50, margin: "auto" }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <h1 style={{ fontFamily: "Oxygen", color: "white" }}>
            Dan Avedis Masotti
          </h1>
          <img
            src={profile}
            style={{ width: "20%", borderRadius: 10 }}
            alt={"profile"}
          />
          <div className="banner-text">
            <h1>AI/ML, Computer Vision, Computer Graphics</h1>
            <hr />
            <p> Tensorflow, ReactJS, NodeJS, GraphQL, MongoDB </p>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};
