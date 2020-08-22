import React from "react";
import { Switch, Route } from "react-router-dom";
import { LandingPage } from "./landing-page";
import { About } from "./about-me";
import { Projects } from "./projects";
import { Resume } from "./resume";

export const Main: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/aboutme" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/resume" component={Resume} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
};
