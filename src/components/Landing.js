import React, { Component } from 'react'
import Schedule from './Schedule'

class Name extends Component {

    constructor() {
        super()
        this.state = {
            monthToDisplay: "january",
            displaySchedule: false
        }
    }

    updateMonth = e => this.setState({monthToDisplay: e.target.value})

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
                    <button id="manage-users">Manage Users</button>
                    <p>Choose Month</p>
                    {this.displayMonthsDropdown()}
                    <button id="generate-schedule">Generate Schedule</button>
                    {this.state.displaySchedule ? <Schedule reqMonth={this.state.monthToDisplay}/> : null}
                </div>
            </div>
        )
    }
}

export default Name