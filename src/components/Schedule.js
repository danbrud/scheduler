import React, { Component } from 'react'
import axios from 'axios'

class Schedule extends Component {

    constructor() {
        super()
        this.state = {
            schedule: []
        }
    }

   
    
    
    render() {
        return(
            <div id="schedule">
                {this.state.schedule}
            </div>        
        )
    }
}

export default Schedule