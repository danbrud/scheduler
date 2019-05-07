import React, { Component } from 'react';
import '../style/Day.css'
import { Link } from 'react-router-dom'


class Day extends Component {

    getShifts = (shift) => {
        for (let schedule of this.props.schedule) {
            // this.props.schedule.forEach(schedule =>{
            if (new Date(schedule.date).toString() == this.props.date.toString()) {
                console.log("match in " + this.props.date)
                console.log(schedule.shifts[shift])
                return schedule.shifts[shift]
            }
        }

        return []
    }

    findUserIDByName =(name) => {return this.props.users.find(user => user.name == name)._id}


    render() {
        return (
            <div className="day">
                {this.props.date.toString() !== "Invalid Date" ?
                    <div className="cell">
                        <div className="dateNumber">
                            {this.props.date.getDate().toString()}
                        </div>
                        <div>
                            <div className="shift">Morning:</div>
                            <div className="users">{this.getShifts("morning").map(user => <span><Link to={`user/${this.findUserIDByName(user)}`}>{user}</Link></span>)}</div>
                        </div>
                        <div>
                            <div className="shift">Afternoon:</div>
                            <div className="users">{this.getShifts("afternoon").map(user => <span><Link to={`user/${this.findUserIDByName(user)}`}>{user}</Link></span>)}</div>
                        </div>
                    </div> :
                    null
                }
            </div>
        );
    }
}

export default Day;