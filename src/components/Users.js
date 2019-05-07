import React, { Component } from 'react'
import axios from 'axios'

class Users extends Component {

    constructor() {
        super()
        this.state = {
            users: [],
            addingUser: false,
            name: "",
            email: ""
        }
    }

    updateUsers = async () => {
        let users = await this.props.getUsers()
        this.setState({users})
    }

    componentDidMount = async () => {
        this.updateUsers()
    }

    toggleAddingUser = () => {
        this.state.addingUser ? this.setState({ addingUser: false }) : this.setState({ addingUser: true })
    }

    handleInput = e => this.setState({[e.target.name]: e.target.value})

    sendUserToDB = async () => {
        let newUser = {name: this.state.name, contact: this.state.email}
        await axios.post('http://localhost:8000/user', newUser)
        
        this.updateUsers()
        this.toggleAddingUser()
        this.clearInputs()
    }

    clearInputs= () => this.setState({name: "", email: ""})

    addUserInputs = () => {
        return (
            <div>
                <input type="text" name="name" placeholder="Enter user name" onChange={this.handleInput} value={this.state.name}/>
                <input type="text" name="email" placeholder="Enter user email" onChange={this.handleInput} value={this.state.email}/>
                <button onClick={this.sendUserToDB}>Confirm Add</button>
            </div>
        )
    }

    render() {

        const users = this.state.users
        
        return(
            <div>
                MY USERS:
                {users.map(u => <div>
                    <span>{u.name} - {u.contact}</span>
                    <button>Manage Data</button>
                </div>)}

                <button onClick={this.toggleAddingUser}>ADD USER</button>
                {this.state.addingUser ? this.addUserInputs() : null}
            </div>
        )
    }
}

export default Users