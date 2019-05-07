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

const users = [
    {
        name: "Paul",
        contact: "paul",
        timesAvailable : [
            {date: new Date(2019, 5, 3), shift: "morning"},
            {date: new Date(2019, 5, 5), shift: "morning"},
            {date: new Date(2019, 5, 10), shift: "afternoon"},
            {date: new Date(2019, 5, 12), shift: "morning"},
            {date: new Date(2019, 5, 17), shift: "afternoon"},
            {date: new Date(2019, 5, 19), shift: "morning"},
            {date: new Date(2019, 5, 24), shift: "afternoon"},
            {date: new Date(2019, 5, 26), shift: "afternoon"}
        ],
        shiftsScheduled : []
    },
    {
        name: "Danny",
        contact: "danny",
        timesAvailable : [
            {date: new Date(2019, 5, 3), shift: "morning"},
            {date: new Date(2019, 5, 3), shift: "afternoon"},
            {date: new Date(2019, 5, 10), shift: "afternoon"},
            {date: new Date(2019, 5, 12), shift: "afternoon"},
            {date: new Date(2019, 5, 17), shift: "afternoon"},
            {date: new Date(2019, 5, 19), shift: "morning"},
            {date: new Date(2019, 5, 19), shift: "afternoon"},
            {date: new Date(2019, 5, 24), shift: "morning"}
        ],
        shiftsScheduled : []
    },
    {
        name: "Ravid",
        contact: "ravid",
        timesAvailable : [
            {date: new Date(2019, 5, 3), shift: "afternoon"},
            {date: new Date(2019, 5, 5), shift: "morning"},
            {date: new Date(2019, 5, 10), shift: "morning"},
            {date: new Date(2019, 5, 10), shift: "afternoon"},
            {date: new Date(2019, 5, 17), shift: "afternoon"},
            {date: new Date(2019, 5, 19), shift: "morning"},
            {date: new Date(2019, 5, 24), shift: "morning"},
            {date: new Date(2019, 5, 26), shift: "morning"}
        ],
        shiftsScheduled : []
    },
    {
        name: "Yossi",
        contact: "yossi",
        timesAvailable : [
            {date: new Date(2019, 5, 5), shift: "morning"},
            {date: new Date(2019, 5, 5), shift: "afternoon"},
            {date: new Date(2019, 5, 12), shift: "morning"},
            {date: new Date(2019, 5, 12), shift: "afternoon"},
            {date: new Date(2019, 5, 19), shift: "morning"},
        ],
        shiftsScheduled : []
    },
    {
        name: "Hunter",
        contact: "hunter",
        timesAvailable : [
            {date: new Date(2019, 5, 3), shift: "morning"},
            {date: new Date(2019, 5, 5), shift: "morning"},
            {date: new Date(2019, 5, 5), shift: "afternoon"},
            {date: new Date(2019, 5, 12), shift: "morning"},
            {date: new Date(2019, 5, 17), shift: "morning"},
            {date: new Date(2019, 5, 19), shift: "morning"},
            {date: new Date(2019, 5, 24), shift: "morning"},
        ],
        shiftsScheduled : []
    },
    {
        name: "Shiran",
        contact: "shiran",
        timesAvailable : [
            {date: new Date(2019, 5, 3), shift: "morning"},
            {date: new Date(2019, 5, 5), shift: "morning"},
            {date: new Date(2019, 5, 10), shift: "morning"},
            {date: new Date(2019, 5, 12), shift: "morning"},
            {date: new Date(2019, 5, 19), shift: "morning"},
            {date: new Date(2019, 5, 24), shift: "morning"},
            {date: new Date(2019, 5, 26), shift: "morning"}
        ],
        shiftsScheduled : []
    }
]

const postUsers = function(users) {
    users.forEach(u => {
        let user = new User(u)
        user.save()
    })
}

// postUsers(users)