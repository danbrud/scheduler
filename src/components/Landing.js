import React, { Component } from 'react'
import Schedule from './Schedule'
import {Link} from 'react-router-dom'

class Landing extends Component {

    constructor() {
        super()
        this.state = {
            monthToDisplay: "january",
            displaySchedule: false
        }
    }

    displaySchedule = () => this.setState({displaySchedule: true})

    updateMonth = e => this.setState({monthToDisplay: e.target.value, displaySchedule: false})

    displayMonthsDropdown = () => {

        return (
            <select value={this.state.monthToDisplay} onChange={this.updateMonth} name="months" id="month-dropdown">
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
            </select>
        )
    }

    render() {
        return (
            <div id="landing-container">
                <div id="buttons">
                    <Link to="/users"><button id="manage-users">Manage Users</button></Link>
                    <p>Choose Month</p>
                    {this.displayMonthsDropdown()}
                    <button id="generate-schedule" onClick={this.displaySchedule}>Generate Schedule</button>
                    {this.state.displaySchedule ? <Schedule reqMonth={this.state.monthToDisplay}/> : null}
                </div>
            </div>
        )
    }
}

export default Landing