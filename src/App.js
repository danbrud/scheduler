import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing'


class App extends Component {

  /* constructor() {
    super()
    this.state = {
      
    }
  } */

  render() {
      return(
        <div className="App">
        <div id="header">
          <span>Manager</span>
        </div>
        <Landing />
      </div> 
      )
  }
}

export default App;
