import React, { Component } from 'react'
import Schedule from './Schedule'
import {Link} from 'react-router-dom'

class Landing extends Component {

    constructor() {
        super()
        this.state = {
            monthToDisplay: "january",
            yearToDisplay: this.getCurrentYear(),
            displaySchedule: false
        }
    }

    getCurrentYear = () => {
        let currentDate = new Date()
        return currentDate.getFullYear()
    }

    displaySchedule = () => this.setState({displaySchedule: true})

    updateMonth = e => this.setState({monthToDisplay: e.target.value, displaySchedule: false})

    updateYear = e => this.setState({yearToDisplay: e.target.value, displaySchedule: false})

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

    displayYearsDropdown = () => {

        return (
            <select value={this.state.yearToDisplay} onChange={this.updateYear} name="years" id="year-dropdown">
                <option value={this.getCurrentYear()}>{this.getCurrentYear()}</option>
                <option value={this.getCurrentYear() + 1}>{this.getCurrentYear() + 1}</option>
                <option value={this.getCurrentYear() + 2}>{this.getCurrentYear() + 2}</option>
                <option value={this.getCurrentYear() + 3}>{this.getCurrentYear() + 3}</option>
                <option value={this.getCurrentYear() + 4}>{this.getCurrentYear() + 4}</option>
            </select>
        )
    }

    render() {
        return (
            <div id="landing-container">
                <div id="buttons">
                    <Link to="/users"><button id="manage-users">Manage Users</button></Link>
                    <p><span>Choose Month {this.displayMonthsDropdown()}</span>  <span>Choose Year {this.displayYearsDropdown()}</span></p>
                    <button id="generate-schedule" onClick={this.displaySchedule}>Generate Schedule</button>
                    {this.state.displaySchedule ? <Schedule reqMonth={this.state.monthToDisplay} reqYear={this.state.yearToDisplay}/> : null}
                </div>
            </div>
        )
    }
}

export default Landing