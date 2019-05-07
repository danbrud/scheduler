import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: "",
        }
    }

    handleInput = e => this.setState({ username: e.target.value })

    redirect = () => {
        let username = this.state.username
        username === "manager" ? <Redirect to='manager'></Redirect> : null

        let user = this.props.users.find(u => u.contact === username)
        !user ? alert("Username does not exist. Please try again") : <Redirect to={`/user/${user.name}`}></Redirect>
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.username} onChange={this.handleInput} />
                <button id="login" onClick={this.redirect}></button>
            </div>
        )
    }
}

export default Login