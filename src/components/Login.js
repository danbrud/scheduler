import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import Manager from './Manager'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: "",
            route: ""
        }
    }

    handleInput = e =>  {
        this.setState({ username: e.target.value }, function() {
            this.generateRoute()
        })
    }

    generateRoute = () => {
        let username = this.state.username.toLowerCase()
        let user = this.props.users.find(u => u.contact.toLowerCase() === username)
        let route = ""

        if (username === "manager") {
            route = `/manager`
        } else if (user) {
            route = `/user/${user.name}`
        } else {
             route = ""
        }

        this.setState({ route })
    }

    render() {

        return (
            <div>
                <input type="text" value={this.state.username} onChange={this.handleInput} />
                {this.state.route.length ? <Link id="login" to={this.state.route}>Login</Link> : <span>Please enter your username...</span>}
            </div>
        )
    }
}

export default Login