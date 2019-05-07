//receives all users and match w/ user name
import React, { Component } from 'react'
import axios from 'axios'

class User extends Component {
    constructor() {
        super()
        this.state = {
            updateBasic: false,
            updateAvailable: false,
            viewSchedule: false,
            currentUser: {},
            updatedName: "",
            updatedEmail: ""
        }
    }

    updateBasicInfo = user => {
        return (<div className="update-basic">Basic update for {user.name}
            <input type="text" className="update-name"/>
            <input type="text" className="update-contact"/>
            <button>Submit</button>
        </div>)
    }

    updateAvailableDates = user => {
        return (<div className="update-available">Available Dates update for {user.name}</div>)
    }

    showUserSchedule = user => {
        return (<div className="view-schedule">Pretty user schedule for {user.name}</div>)
    }

    changeUpdateStatus = event => {
        const statusToChange = event.target.name
        this.setState({ [statusToChange]: !this.state[statusToChange]})
    }

    setUser = () => {
        const user = this.props.users.find(u => u._id == this.props.match.params.id)
        return user
    }

    componentDidMount = () => {
        let user = this.setUser()
        this.setState({
            currentUser: user
        })
    }

    render(){
        const user = this.state.currentUser
        return (<div>
            <button className="basic-button" name="updateBasic" onClick={this.changeUpdateStatus}>Update Details</button>
            <button className="available-button" name="updateAvailable" onClick={this.changeUpdateStatus}>Update Availability</button>
            <button className="user-schedule-button" name="viewSchedule" onClick={this.changeUpdateStatus}>Show Personal Schedule</button>

            {this.state.updateBasic ? this.updateBasicInfo(user) : null}
            {this.state.updateAvailable ? this.updateAvailableDates(user) : null}
            {this.state.viewSchedule ? this.showUserSchedule(user) : null}

        </div>)
    }
}

export default User