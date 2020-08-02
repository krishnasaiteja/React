import React, { Component } from "react";
import DisplayStudents from "./ShowStudents.js";
import App from "./App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProfileComponent from "./ProfileComponent";

class Navigate extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={App} />
          <Route path="/showStudents" component={DisplayStudents} />
          <Route
            path="/showStudId/:username/"
            render={(props) => (
              <ProfileComponent username={props.match.params.username} />
            )}
          />
        </div>
      </Router>
    );
  }
}
export default Navigate;
