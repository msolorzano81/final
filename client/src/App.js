
import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link} from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import BackgroundImage from './components/bgimage';
import Subscriptions from './pages/subscriptions';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={Login}/> 
        <Route exact path="/signup" component={Signup}/> 
        <Route path="/home" component={BackgroundImage} />
          <Route path="/subscriptions" component={Subscriptions} />
      </div>
      </Router>
      
    );
  }
}

export default App;
