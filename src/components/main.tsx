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
      <Route path="/aboutme" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
    </Switch>
  );
};
