import React from 'react';
import './components/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import TouchTank from './components/TouchTank';
import Home from './components/Home.js';
import Math from './components/Math.js';
import MainFloor from './components/MainFloor.js';
import Research from './components/Research.js';
import Intro from './components/Intro.js';
import SharkTank from './components/SharkTank.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>

          {/* <Link to="/touchtank">Go To Touch Tank</Link>
        <Link to="/">Go To Home</Link> */}
          {/* <Link to="/math">Go To Math Puzzle</Link> */}

          <Switch>
            <Route path="/touchtank">
              <TouchTank />
            </Route>

            <Route path="/math">
              <Math />
            </Route>

            <Route path="/intro">
              <Intro />
            </Route>

            <Route path="/mains">
              <MainFloor />
            </Route>

            <Route path="/research">
              <Research />
            </Route>

            <Route path="/shark">
              <SharkTank />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
