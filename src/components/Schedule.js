import React, { Component } from 'react'
import axios from 'axios'

class Schedule extends Component {

    constructor() {
        super()
        this.state = {
            schedule: []
        }
    }


    getSchedule = async () => {
        let schedule = await axios.get(`http://localhost:8000/schedule/${this.props.reqMonth}/${this.props.reqYear}`)
        return schedule.data
    }

    componentDidMount = async () => {
        let schedule = await this.getSchedule()
        this.setState({ schedule })
    }
    
    
    render() {
        return(
            <div id="schedule">
                {console.log(this.state.schedule)}
                
            </div>        
        )
    }
}

export default Schedule