import React from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

interface SkillsProps {
  skill: string;
  progress: number;
}

export const Skills: React.FunctionComponent<SkillsProps> = (
  props: SkillsProps
): JSX.Element => {
  return (
    <Grid>
      <Cell col={12}>
        <div>
          {props.skill}
          <ProgressBar
            style={{ margin: "auto", width: "75%" }}
            progress={props.progress}
          />
        </div>
      </Cell>
    </Grid>
  );
};
