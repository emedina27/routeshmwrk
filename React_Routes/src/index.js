import React, { Component } from "react";
// import { BrowserRouter } from "react-router-dom";
import "./CSS/index.css";
import ReactDOM from "react-dom";

import Happy from "./components/Happy";
import Sleepy from "./components/Sleepy";
import Guilty from "./components/Guilty";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/happy">Happy</Link>
          <Link to="/Sleepy">Sleepy</Link>
          <Link to="/Guilty">Guilty</Link>

          <Switch>
            <Route exact path="/happy" component={Happy} />
            <Route exact path="/Sleepy" component={Sleepy} />
            <Route exact path="/Guilty" component={Guilty} />
          </Switch>
        </nav>
      </Router>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
export default Home;
