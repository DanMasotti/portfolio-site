import React from "react";
import { Grid, Cell } from "react-mdl";

import { Project } from "./project";

const gmres = require("../media/gmres_out_anim.gif");
const vamp = require("../media/vamp.gif");
const mcmc = require("../media/mcmc.gif");
const raytracer = require("../media/raytracer.gif");
const fem = require("../media/raining-spheres.gif");
const path = require("../media/glass-mis-500SSP.png");

export const Projects: React.FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <Grid>
        <Cell col={4}>
          <Project
            title={"Soft-body Simulation using FEM and Multithreading"}
            img={fem}
            description={
              "For my simulation project in Interactive Computer Graphics, supported multiple deformable objects. I used a FEM with multi-threading via OpenMP."
            }
            link={"https://github.com/DanMasotti/simulation"}
            linkText={"Request Source Code"}
          ></Project>
        </Cell>
        <Cell col={4}>
          <Project
            title={"Path Tracer"}
            img={path}
            description={
              "Above you'll see an example my path tracer which uses Importance Sampling on BRDFs as well as MIS for Next Event Estimation. This was rendered with only 500 samples per pixel!"
            }
            link={"https://github.com/DanMasotti/path"}
            linkText={"Request Source Code"}
          ></Project>
        </Cell>
        <Cell col={4}>
          <Project
            title={"GPU Raytracing"}
            img={raytracer}
            description={
              "Forked from my final project on GPU Ray tracing for my Computer Graphics course. I wrote the entire ray tracer and scene representation in a shader program."
            }
            link={"https://github.com/DanMasotti/gpu-raytracer"}
            linkText={"View Source Code"}
          ></Project>
        </Cell>
      </Grid>
      <Grid>
        <Cell col={4}>
          <Project
            title={"Vamp"}
            img={vamp}
            description={
              "Vamp is a collaborative, web-based DAW I'm working on with a another software developer to make music recording fun and simple."
            }
            link={""}
            linkText={"Coming soon!"}
          ></Project>
        </Cell>
        <Cell col={4}>
          <Project
            title={"MCMC Codebreaking"}
            img={mcmc}
            description={"Using MCMC to break a substitution cipher"}
            link={
              "https://github.com/DanMasotti/MCMC-Codebreaking/blob/master/MCMC_Codebreaking.ipynb"
            }
            linkText={"See Jupyter Notebook"}
          ></Project>
        </Cell>

        <Cell col={4}>
          <Project
            title={"Large-scale Linear Algebra"}
            img={gmres}
            description={
              "Rendering this animation of the Grey Scott PDE's evolution took considerably less time with iterative linear solvers than with direct solvers."
            }
            link={
              "https://docs.google.com/presentation/d/1zv9_tieZm5b0m_ZEmlJMoKxIYx07mFQw1tPwbXrCCJ8/edit"
            }
            linkText={"View Presentation"}
          ></Project>
        </Cell>
      </Grid>
    </div>
  );
};
