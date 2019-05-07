import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing'
import Users from './components/Users'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import Calender from './components/Calender';


class App extends Component {

  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  getUsers = async () => {
    let users = await axios.get('http://localhost:8000/users')
    return users.data
  }

  componentDidMount = async () => {
    let users = await this.getUsers()
    this.setState({ users })
  }

  render() {
    return (
      <Calender month="5" year="2019"/>
    )
  }
}

export default App;
