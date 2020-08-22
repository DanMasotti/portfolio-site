import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Main } from "./components/main";
import { Link, HashRouter } from "react-router-dom";

export const App: React.FunctionComponent = () => {
  return (
    <HashRouter basename="/">
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Home
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/resume"> Resume </Link>
              <Link to="/projects"> Projects </Link>
              <Link to="/aboutme"> About Me </Link>
            </Navigation>
          </Header>
          <Drawer title="My Portfolio">
            <Navigation>
              <Link to="/resume"> Resume </Link>
              <Link to="/projects"> Projects </Link>
              <Link to="/aboutme"> About Me </Link>
            </Navigation>
          </Drawer>
          <Content>
            <Main />
          </Content>
        </Layout>
      </div>
    </HashRouter>
  );
};
