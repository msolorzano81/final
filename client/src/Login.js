import React, { Component } from 'react';


class Login extends Component {
  render() {
    return (

      <div>
        <label for="uname"><b>Username</b></label>
      <br />
        <input type="text" placeholder="Enter Username" name="uname" required />
        <br />
        <label for="psw"><b>Password</b></label>
        <br />
        <input type="password" placeholder="Enter Password" name="psw" required />

        <div class="field is-grouped">
          <p class="control">
            <a class="button is-primary" a href="/home">
              Login</a>
          </p>
          <p class="control">
            <a class="button is-light" a href="/Signup">
              Signup
            </a>
          </p>
        </div>


      </div>
    );
  }
}

export default Login;