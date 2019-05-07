//receives all users and match w/ user name
import React, { Component } from 'react'

class User extends Component {
    render(){
        const user = this.props.users.find(u => u.name === match.params.name)
        return (<div>
            {user}
        </div>)
    }
}

export default User