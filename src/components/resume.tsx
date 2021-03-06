import React from "react";
import { Grid, Cell } from "react-mdl";
import { Education } from "./education";
import { Experience } from "./experience";
import { Skills } from "./skills";

export const Resume: React.FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <Grid>
        <Cell col={4} rows={1} style={{ background: "#EDF0F4", padding: 5 }}>
          <h2 style={{ paddingTop: "2em" }}> Daniel Avedis Masotti </h2>
          <h4 style={{ color: "grey" }}>
            3D Data Scientist and Graphics Software Engineer
          </h4>
          <hr style={{ borderTop: "3px solid #FF6B6B", width: "50%" }} />
          <p>
            I specialize in machine learning, numerical optimization, and
            scientific computing with applications to visual computing.
          </p>
          <hr style={{ borderTop: "3px solid #FF6B6B", width: "50%" }} />
          <h5> Address </h5>
          <p> 259 Morris Ave, Rockville Centre, NY </p>
          <h5> Phone </h5>
          <p> (516) 398-9746 </p> <h5> Email </h5>
          <p> d.avedis.masotti@gmail.com </p>
          <hr style={{ borderTop: "3px solid #FF6B6B", width: "50%" }} />
        </Cell>
        <Cell className="resume-right-col" col={8}>
          <h2> Education </h2>
          <Education
            startYear={"September 2020"}
            endYear={"May 2021"}
            schoolName="Brown Univeristy - ScM. Computer Science"
            schoolDescription="Coursework includes 3D Game Engine Development (C++), Interactive Computer Graphics (C++), 
            and Topics in 3D Computer Vision and Deep Learning (Python)"
          />
          <Education
            startYear={"September 2016"}
            endYear={"May 2020"}
            schoolName="Brown University - ScB. Applied Mathematics"
            schoolDescription="Coursework includes Computer Vision (Python), 
            Machine Learning for Science (Python), and Recent Applications 
            of Probability and Statistics (Python/Matlab)"
          />
          <hr style={{ borderTop: "3px solid #FF6B6B" }} />
          <h2> Experience </h2>
          <Experience
            startYear="April 2021"
            endYear="Current"
            jobName="Research Intern"
            jobDescription="Continuing my work as a graduate student, I continued working 
            on Simbiome, a lightweight Python framework for mixed dataset synthesis at Brown's 
            Interactive 3D Vision and Learning Lab."
          />
          <Experience
            startYear="February 2020"
            endYear="Current"
            jobName="Independent Web Developer"
            jobDescription="Collaborated with another developer to build a modern, 
            web-based Digital Audio Workstation (DAW) with technologies such as React, 
            Typescript, and GraphQL.  Some things that I worked on include optimizing 
            real-time graphics such as the audio waveform and collaborative features 
            with WebRTC API."
          />
          <Experience
            startYear="June 2019"
            endYear="August 2019"
            jobName="Financial Analyst Intern at Monticello Capital Management"
            jobDescription="Leveraged data science skills in Python to detect anomalies in 
            option prices with an isolation forest, confirming the portfolio manager’s
            suspicion about some overvalued/undervalued equities. "
          />
          <Experience
            startYear="July 2012"
            endYear="August 2018"
            jobName="Resort Staff at Silver Point Beach Club"
            jobDescription="Mastered customer service and professional communication 
            skills in a high touch environment."
          />
          <hr style={{ borderTop: "3px solid #FF6B6B" }} />
          <div>
            <h2> Programming Languages </h2>
            <Skills skill="Python" progress={80} />
            <Skills skill="Java" progress={30} />
            <Skills skill="TypeScript" progress={60} />
            <Skills skill="C++" progress={75} />
            <Skills skill="MatLab" progress={40} />
          </div>
        </Cell>
      </Grid>
    </div>
  );
};
