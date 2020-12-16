import React from "react";
import {
  Grid,
  Cell,
  Card,
  CardActions,
  Button,
  CardTitle,
  CardText
} from "react-mdl";

const gmres = require("../media/gmres_out_anim.gif");
const vamp = require("../media/vamp.gif");
const mcmc = require("../media/mcmc.gif");
const raytracer = require("../media/raytracer.gif");

export const Projects: React.FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <Grid>
        <Cell col={1}>
          <Card
            shadow={0}
            style={{ minWidth: "300px", height: "450px", margin: "auto" }}
          >
            <CardTitle
              expand
              style={{
                color: "#fff",
                background: `url(${gmres}) center / cover`
              }}
            >
              Large-scale Linear Algebra
            </CardTitle>
            <CardText>
              Rendering this animation of the Grey Scott PDE's evolution took
              considerably less time with iterative linear solvers than with
              direct solvers.
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href={
                    "https://docs.google.com/presentation/d/1zv9_tieZm5b0m_ZEmlJMoKxIYx07mFQw1tPwbXrCCJ8/edit"
                  }
                  style={{ textDecoration: "none" }}
                >
                  View Presentation
                </a>
              </Button>
            </CardActions>
            <CardActions border>
              <Button colored>
                <a
                  href={
                    "https://github.com/DanMasotti/large-scale-linear-algebra"
                  }
                  style={{ textDecoration: "none" }}
                >
                  View Matlab Scripts
                </a>
              </Button>
            </CardActions>
          </Card>
        </Cell>
        <Cell col={10}>
          <Card
            shadow={0}
            style={{ minWidth: "300px", height: "450px", margin: "auto" }}
          >
            <CardTitle
              expand
              style={{
                color: "#fff",
                background: `url(${vamp}) center / cover`
              }}
            >
              Vamp
            </CardTitle>
            <CardText>
              Vamp is a collaborative, web-based DAW I'm working on with a
              another software developer to make music recording fun and simple.
            </CardText>
            <CardActions border>
              <Button colored>
                <a>Coming Soon!</a>
              </Button>
            </CardActions>
          </Card>
        </Cell>
      </Grid>
      <Grid>
        <Cell col={1}>
          <Card
            shadow={0}
            style={{ minWidth: "300px", height: "450px", margin: "auto" }}
          >
            <CardTitle
              expand
              style={{
                color: "#000",
                background: `url(${mcmc}) center / cover`
              }}
            >
              MCMC Codebreaking
            </CardTitle>
            <CardText>Using MCMC to break a substitution cipher</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href={
                    "https://github.com/DanMasotti/MCMC-Codebreaking/blob/master/MCMC_Codebreaking.ipynb"
                  }
                  style={{ textDecoration: "none" }}
                >
                  View Jupyter Notebook
                </a>
              </Button>
            </CardActions>
            <CardActions border>
              <Button colored>
                <a
                  href={"https://github.com/DanMasotti/codebreaker-web"}
                  style={{ textDecoration: "none" }}
                >
                  View Flask Web App
                </a>
              </Button>
            </CardActions>
          </Card>
        </Cell>
        <Cell col={10}>
          <Card
            shadow={0}
            style={{ minWidth: "300px", height: "450px", margin: "auto" }}
          >
            <CardTitle
              expand
              style={{
                color: "#fff",
                background: `url(${raytracer}) center / cover`
              }}
            >
              GPU Ray-tracer
            </CardTitle>
            <CardText>
              Forked from my final project on GPU Ray tracing for my Computer
              Graphics course. I wrote the entire ray tracer and scene
              representation in a shader program.
            </CardText>

            <CardActions border>
              <Button colored>
                <a
                  href={"https://github.com/DanMasotti/gpu-raytracer"}
                  style={{ textDecoration: "none" }}
                >
                  View C++ Source code
                </a>
              </Button>
            </CardActions>
          </Card>
        </Cell>
      </Grid>
    </div>
  );
};
