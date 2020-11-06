import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "../../pages/home";
import Mens from "../../pages/mens";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Switch>
        <Route exact path="/Mens" component={Mens} />
      </Switch>
    </>
  );
};

export default Routes;
