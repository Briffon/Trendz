import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "../../pages/home";
import Mens from "../../pages/Mens";
import Shopping from "../../pages/Shopping"
import Womens from '../../pages/Womens';
const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Switch>
        <Route exact path="/Mens" component={Mens} />
      </Switch>
      <Switch>
        <Route exact path="/Womens" component={Womens} />
      </Switch>
      <Switch>
        <Route exact path="/Shopping" component={Shopping} />
      </Switch>
    </>
  );
};

export default Routes;
