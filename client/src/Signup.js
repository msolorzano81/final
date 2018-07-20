import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  state = {}

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/signup', {
      email: this.state.email,
      password: this.state.password
    }).then(data => {
      console.log(data)
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" />
          </div>
        </div>

       <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input name="username" onChange={this.handleChange} class="input is-success" type="text" placeholder="Text input" />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check" ></i>
              </span>
          </div>
            {/* <p class="help is-success">This username is available</p> */}
        </div>

          
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input name="email" onChange={this.handleChange}  class="input is-danger" type="email" placeholder="Email input" />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
            </div>
              {/* <p class="help is-danger">This email is invalid</p> */}
          </div>

          <div class="field">
            <input name="password" onChange={this.handleChange}  class="input is-danger" type="password" placeholder="passsword input" />
              {/* <label class="label">Gender</label>
              <div class="control">
                <div class="select">
                  <select>
                    <option>Select dropdown</option>
                    <option>Female</option>
                    <option>Male</option>
                  </select>
                </div>
              </div> */}
          </div>
          <button class="button is-link" type="submit"> Submit</button>          
   
      </form>

                );
              }
            }
            
export default Signup;