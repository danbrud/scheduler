import React, { Component } from 'react';


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


    render() {
        return (
            <div className="day">
                {this.props.date.toString() !== "Invalid Date" ?
                    <div>
                        <div>
                            {this.props.date.getDate().toString()}
                        </div>
                        <div>
                            <div className="morning">Morning:</div>
                            {this.getShifts("morning").map(user => <span>{user}</span>)}
                        </div>
                        <div>
                            <div className="afternoon">Afternoon:</div>
                            {this.getShifts("afternoon").map(user => <span>{user}</span>)}
                        </div>
                    </div> :
                    null
                }
            </div>
        );
    }
}

export default Day;