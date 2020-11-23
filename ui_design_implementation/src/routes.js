import React, { Component } from "react";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import ChallengesPage from "./pages/ChallengesPage";
import Challenge1 from "./pages/ChallengePage1";
import Challenge2 from "./pages/ChallengePage2";
import Challenge3 from "./pages/ChallengePage3";
import Challenge4 from "./pages/ChallengePage4";
import Challenge5 from "./pages/ChallengePage5";
import Exercises from "./pages/Exercises"
import Exercise1 from "./pages/ExercisePage1"
class Routes extends Component {
  render() {
    return (
      <Router>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/challenges" exact component={ChallengesPage}></Route>
          <Route path="/challenge1" exact component={Challenge1}></Route>
          <Route path="/challenge2" exact component={Challenge2}></Route>
          <Route path="/challenge3" exact component={Challenge3}></Route>
          <Route path="/challenge4" exact component={Challenge4}></Route>
          <Route path="/challenge5" exact component={Challenge5}></Route>

          
          <Route path="/exercises" exact component={Exercises}></Route>
          <Route path="/exercise1" exact component={Exercise1}></Route>
      </Router>
    );
  }
}
export default Routes;
