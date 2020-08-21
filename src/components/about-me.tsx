import React from "react";
import { Grid } from "react-mdl";

const dining = require("../media/dining_pic.jpg");

export const About: React.FunctionComponent = (): JSX.Element => {
  return (
    <Grid>
      <h1 style={{ display: "flex", padding: "2rem" }}> About Me </h1>
      <p style={{ display: "flex", padding: "2rem" }}>
        As an undergraduate at Brown, I was a member of the Brown Music Co-op as
        well as head designer for Brown Data Science Club. I was also an Applied
        Math Peer Advisor and regularly met with mentees to discuss course plans
        and our department. During Junior Spring, I was selected by the Directed
        Reading Program to research large-scale computational linear algebra.
        Specifically, I worked with a graduate student on large, sparse systems
        of linear equations, for which modern iterative linear solvers such as
        Conjugate Gradient and the Generalized Minimum Residual (GMRES) methods
        combined with computational techniques such as preconditioning offer
        substantial performance boost.
      </p>
      <p style={{ padding: "2rem" }}>
        Additionally, I’ve played guitar and sung for indie rock band
        <a href={"https://fakefrank.com"}> Fake Frank </a>
        since late 2016. We've toured in New England and greater NYC areas.
        Other hobbies I have include 3D modelling and animation.
      </p>
    </Grid>
  );
};
