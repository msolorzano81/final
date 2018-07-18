import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import BackgroundImage from './components/bgimage';
import Subscriptions from './pages/subscriptions';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/home" component={BackgroundImage} />
          <Route path="/subscriptions" component={Subscriptions} />
        </div>
      </Router>
    );
  }
}

export default App;
