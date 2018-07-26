
import React, { Component } from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Login from './Login';
// import BackgroundImage from './components/bgimage';
// import Subscriptions from './pages/subscriptions';
// import Signup from './Signup';
import SubmitImage from './components/subimage';
import LoginImage from './components/logimage';
// import SubmitImage from './components/subimage';


class App extends Component {
  state = {
    loggedIn: false
  }

  handleLogin = () => {
    this.setState({loggedIn: true})
  }

  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" render={() => (
          <div>
            <Login login={this.handleLogin} />
            <LoginImage />
          </div>
        )}
        />
        <Route exact path="/Signup" render={() => (
          <div>
            <Signup login={this.handleLogin} />
            <SubmitImage />
          </div>
          )}
          />
        <Route exact path="/home" render={() => (
          <div>
            homepage
          </div>
          )}
          />
        </div>
    </Router>
    );
   }   
  }   
        



export default App;
