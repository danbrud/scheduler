import React, { Component } from 'react';
import Day from './Day';
import axios from 'axios'
import '../style/Calender.css'



class Calender extends Component {
    constructor() {
        super()
        this.state = {
            month: -1,
            year: -1,
            matrix: [],
            schedule: []
        }
    }

    generateCalender = () => {
        let num = 1
        let matrix = []
        for (let r = 0; r < 6; r++) {
            matrix.push([])
            for (let c = 0; c < 7; c++) {
                matrix[r].push(".")
            }
        }
        console.log(matrix)
        this.generateMonth(matrix)
    }



    generateMonth = matrix => {
        let first = new Date(this.state.year, this.state.month, 1)
        for (let i in matrix[0]) {
            if (i == first.getDay()) {
                matrix[0][i] = first
                break
            } else {
                matrix[0][i] = "X"
            }
        }
        let day = 2

        for (let r = 0; r < 6; r++) {
            for (let c = 0; c < 7; c++) {
                if (matrix[r][c] == "." && new Date(this.state.year, this.state.month, day).getMonth() == this.state.month) {
                    matrix[r][c] = new Date(this.state.year, this.state.month, day)
                    day++
                }
                else if (matrix[r][c] == ".") {
                    matrix[r][c] = "X"
                }
            }
        }


        this.setState({ matrix })
    }

    getSchedule = async () => {
        let schedule = await axios.get(`http://localhost:8000/schedule/${this.props.reqMonth}/${this.props.reqYear}`)
        return schedule.data
    }

    componentDidMount = async () => {
        let schedule = await this.getSchedule()
        this.setState({ schedule, month: this.props.reqMonth, year: this.props.reqYear }, function () {
            this.generateCalender()
        })
    }

    getMonthName = (month) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]

        const d = new Date(2019,month,1);
        return monthNames[d.getMonth()];
    }

    render() {
        console.log(this.state.schedule)
        return (
            <div id="calender">
                <div className="title">{this.getMonthName(this.state.month)},  {this.state.year}</div>
                <div className="weekDays">
                    <div>Sunday</div>
                    <div>Monday</div>
                    <div>Tuesday</div>
                    <div>Wednesday</div>
                    <div>Thursday</div>
                    <div>Friday</div>
                    <div>Saturday</div>
                </div>
                <div className="month">
                    {this.state.matrix.map(week => week.map((day, i) => <Day
                        key={i}
                        date={new Date(day)}
                        schedule={this.state.schedule}
                        users={this.props.users}
                    />
                    ))}
                </div>
            </div>
        );
    }

}

export default Calender;