import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './form/loginForm';

export default class Login extends Component {
  
  submit = (data) => {
    console.log(data)
  }

  render() {
    return (
      <div>
        <h1> Login page </h1>
        <LoginForm submit={this.submit} />


      </div>

    );
  }
}
