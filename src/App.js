import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import TouchTank from './TouchTank';
import Home from './Home.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      img: 'https://images.freeimages.com/images/large-previews/44a/cow-1575964.jpg',
      value: "",
      isCorrect: ""
    };
    this.handleChange = this.handleChange.bind(this);

    this.maryAudio = new Audio('http://www.freeabcsongs.com/mp3/mary.mp3');
    // this.dogAudio = new Audio(this.url);

  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <Router>
        <Link to="/touchtank">Go To Touch Tank</Link>
        <Link to="/">Go To Home</Link>

        <Switch>
          <Route path="/touchtank">
            <TouchTank />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
