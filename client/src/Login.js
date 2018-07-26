import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
  
class Login extends Component {
  handleChange = (e) => {
    const target = e.target;
    const {name, value} = target;

    this.setState({
      [name]: value
    });
  }
  
  onSubmit = () => {
    axios.post('/api/login', this.state)
      .then(data => {
        this.props.login();
        this.props.history.push('/home');
        console.log("nice you are now logged in!")
      })
      .catch(err => {
        console.log('a bad thing happened')
      })
  }
  
  render() {
    return (

      <div id="Login">
      <div>
        <label for="uname"><b>Username</b></label>
      <br />
        <input type="text" placeholder="Enter Username" name="email" required  onChange={this.handleChange} />
        <br />
        <label for="psw"><b>Password</b></label>
        <br />
        <input type="password" placeholder="Enter Password" name="password" required   onChange={this.handleChange} />
        <br />
        <br />

        <div class="field is-grouped">
          <p>
            <button class="button is-primary" onClick={this.onSubmit} >
              Login
            </button>
            <br />
          </p>
         <p class="control">
           <a class="button is-light" a href="/Signup">
             Signup
           </a>
         </p>

            
          
      

</div>
      </div>
      </div>
      
    );
  }
}

export default withRouter(Login);




  
  
        