import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Manager from './Manager'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: "",
            route: ""
        }
    }

    handleInput = e => this.setState({ username: e.target.value })

    generateRoute = () => {
        let username = this.state.username.toLowerCase()
        let user = this.props.users.find(u => u.contact.toLowerCase() === username)
        let route = ""

        if (username === "manager") {
            route = `/manager`
        } else if (!user) {
            alert("Username does not exist. Please try again")
        } else {
            route = `/user/${user._id}`
        }

        this.setState({ route })
    }

    render() {

        if(this.state.route.length) { return <Redirect to={this.state.route} /> }

        return (
            <div>
                <input type="text" value={this.state.username} onChange={this.handleInput} />
                <button id="login" onClick={this.generateRoute}>Login</button>
            </div>
        )
    }
}

export default Login