// App Main and Routes File...!

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Init_Game from "./container/init-game";
import Rock_Paper_Scissor_Game from "./container/game";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/game" component={Rock_Paper_Scissor_Game} />
        <Route path="/" component={Init_Game} />
      </Switch>
    </Router>
  );
}

export default Routes;