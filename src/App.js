import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CompOne from './components/CompOne.react';

class App extends Component {
  render() {
    return (
      /*
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          Start with this and then " npm run eject " to make it a standard reactJS application.
        </div>
        {
          //renders the children
          this.props.children
        }
      </div>
      */
      <div> 
        <div>Create React App</div>
        {
          //renders the children
          this.props.children
        }
      </div>
    );
  }
}

export default App;
