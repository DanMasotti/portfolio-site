import React from "react";
import { Grid, Cell } from "react-mdl";

interface ExperienceProps {
  startYear: string;
  endYear: string;
  jobName: string;
  jobDescription: string;
}

export const Experience: React.FunctionComponent<ExperienceProps> = (
  props: ExperienceProps
): JSX.Element => {
  return (
    <Grid>
      <Cell col={4}>
        <p>
          {props.startYear} - {props.endYear}
        </p>
      </Cell>
      <Cell col={8}>
        <h4 style={{ marginTop: "0px" }}> {props.jobName} </h4>
        <p> {props.jobDescription} </p>
      </Cell>
    </Grid>
  );
};
