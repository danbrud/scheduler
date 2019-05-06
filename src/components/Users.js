import React, { Component } from 'react'

class Users extends Component {

    render() {
        return(
            <div>
                {this.props.users}
            </div>
        )
    }
}

export default Users