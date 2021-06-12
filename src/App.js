import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "assets/css/nucleo-svg.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/bund.css";

import LandingPage from "views/LandingPage.js";

const App = () => {

  return (
    <Router basename="/">
      <div className="App">
        <div className="main">
          <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default App;