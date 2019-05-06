const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    contact: String,
    timesAvailable: [{
        date: Date,
        shift: String
    }],
    shiftsScheduled: [{
        date: Date,
        shift: String
    }]
})

const User = mongoose.model('User', userSchema)

module.exports = User