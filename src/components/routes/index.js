import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "../../pages/home";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default Routes;
