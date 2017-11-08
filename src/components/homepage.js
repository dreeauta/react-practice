import React, {Component } from 'react';
import { Link } from 'react-router-dom';


export default class Homepage extends Component {
  render() {
    return (
      <div>
         <h1> This is the homepage </h1>
        <Link to="/login"> Login </Link>
      </div>

    );
  }
}
