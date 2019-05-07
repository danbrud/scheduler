import React, { Component } from 'react'
import Schedule from './Schedule'
import {Link} from 'react-router-dom'
import Calender from './Calender';

class Manager extends Component {

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
                <option value="0">January</option>
                <option value="1">February</option>
                <option value="2">March</option>
                <option value="3">April</option>
                <option value="4">May</option>
                <option value="5">June</option>
                <option value="6">July</option>
                <option value="7">August</option>
                <option value="8">September</option>
                <option value="9">October</option>
                <option value="10">November</option>
                <option value="11">December</option>
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
                    {this.state.displaySchedule ? <Calender reqMonth={this.state.monthToDisplay} reqYear={this.state.yearToDisplay}/> : null}
                </div>
            </div>
        )
    }
}

export default Manager