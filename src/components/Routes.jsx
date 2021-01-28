import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={NoMatch} />
    </Switch>
  );
}
