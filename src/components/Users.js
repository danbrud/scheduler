import React, { Component } from 'react'

class Users extends Component {

    
    
    render() {
        const users = this.props.users
        
        return(
            <div>
                {users.map(u => <div>
                    <span>{u.name} - {u.contact}</span>
                    <button>Manage Data</button>
                </div>)}
            </div>
        )
    }
}

export default Users