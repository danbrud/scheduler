import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Landing from './components/Manager'
import Login from './components/Login'
import Manager from './components/Manager'
import Users from './components/Users'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import Calender from './components/Calender';
import User from './components/User';


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

    let users = this.state.users

    return (
      <Router >
        <div className="App">
          {/* <div id="header">
            <span>Manager</span>
          </div> */}
          
          <Route exact path="/" render={() => <Login users={users}/>} />
          <Route exact path="/manager" render={() => <Manager users={users}/>} />
          <Route exact path="/user/:name" render={(match) => <User  match={match} users={users}/>} />
          <Route exact path="/users" render={() => <Users users={users} getUsers={this.getUsers}/>} />
        </div>
      </Router>
    )
  }
}

export default App;
