import React from "react";
import { Grid, Cell } from "react-mdl";

interface EducationProps {
  startYear: string;
  endYear: string;
  schoolName: string;
  schoolDescription: string;
}

export const Education: React.FunctionComponent<EducationProps> = (
  props: EducationProps
): JSX.Element => {
  return (
    <Grid>
      <Cell col={4}>
        <p>
          {props.startYear} - {props.endYear}
        </p>
      </Cell>
      <Cell col={8}>
        <h4 style={{ marginTop: "0px" }}> {props.schoolName} </h4>
        <p> {props.schoolDescription} </p>
      </Cell>
    </Grid>
  );
};
