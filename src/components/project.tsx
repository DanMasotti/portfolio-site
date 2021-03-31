import React from "react";
import { Card, CardActions, Button, CardTitle, CardText } from "react-mdl";

interface ProjectProps {
  title: string;
  img: any;
  description: string;
  link: string;
  linkText: string;
}

export const Project: React.FunctionComponent<ProjectProps> = (
  props: ProjectProps
): JSX.Element => {
  return (
    <Card
      shadow={0}
      style={{ minWidth: "300px", height: "450px", margin: "auto" }}
    >
      <CardTitle
        expand
        style={{
          color: "#fff",
          background: `url(${props.img}) center / cover`
        }}
      >
        {props.title}
      </CardTitle>
      <CardText>{props.description}</CardText>
      <CardActions border>
        <Button colored>
          <a href={props.link} style={{ textDecoration: "none" }}>
            {props.linkText}
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};
