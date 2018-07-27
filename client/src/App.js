
import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link} from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import BackgroundImage from './components/bgimage';
import Subscriptions from './pages/subscriptions';
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
         <div>
        <Route path="/login" render={()=>(
          <div>
            <Login/>
            <Navbar/>
            </div> 
        )} />

        <Route path="/signup" render={()=>(
          <div>
            <Signup/>
            <Navbar/>
          </div> 
        )} />

        <Route path="/home" render={()=>(
          <div>
            <Navbar/>
            <BackgroundImage/>
            </div>
           
        )} />
          <Route path="/subscriptions" render={()=>(
          <div>
            <Subscriptions/>
            <Navbar/>
            </div>
           
        )} />
       </div> 
</Router>
 );
}   
}   
   

export default App;