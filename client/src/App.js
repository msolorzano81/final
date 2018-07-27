
import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link} from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import BackgroundImage from './components/bgimage';
//import Subscriptions from './pages/subscriptions';
import SubCard from './components/SubCard';
import NavSignout from './components/NavBar_signout'
import subscriptions from './pages/subscriptions.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={Login}/> 
        <Route exact path="/signup" component={Signup}/> 
        <Route path="/home" render={() => (
          <div>
            <BackgroundImage/>
            <NavSignout />
          </div> 
        )}
        />

        <Route exact path="/subscriptions" component={subscriptions}/> 


        {/* <Route path="/subscriptions" render={() => (
          <div className="columns">
            <div className="column">       
            1
            </div>
            <div className="column">       
            <SubCard />
            </div>
          </div>
           
        )}
        /> */}
      </div>
      </Router>
      
    );
  }
}

export default App;
