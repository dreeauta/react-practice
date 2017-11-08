import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Homepage from './components/homepage';
import Login from './components/login';

import './index.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Route path = "/" exact component={Homepage}/>
        <Route path = "/Login" exact component={Login}/>

      </div>
    );
  }
}

export default App;
