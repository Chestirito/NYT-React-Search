import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles";
import Results from "./pages/Results";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/results/:topic/:startY/:endY" component={Results} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </div>
  </Router>
);

export default App;
