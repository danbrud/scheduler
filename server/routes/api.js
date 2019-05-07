const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../model/User')
const Scheduler = require('../Scheduler')

const getUsers = async () => await User.find({})


router.get('/sanity', function (req, res) {
    res.send('OK!')
})

router.get('/users', async function (req, res) {
    let reqUsers = await this.getUsers()
    reqUsers.exec(function (err, users) {
        res.send(users)
    })
})

router.get('/schedule/:month/:year', async function (req, res) {

    let year = req.params.year
    let month = req.params.month
    let daysToSchedule = [1 ,3]
    let usersPerShift = 2
    let users = await getUsers()

    const schedule = new Scheduler(year, month, daysToSchedule, usersPerShift, users)
    const generatedSchedule = schedule.createSchedule()

    res.send(generatedSchedule)
})

router.post('/user', function (req, res) {
    const reqUser = req.body

    const newUser = new User({
        name: reqUser.name,
        contact: reqUser.contact,
        timesAvailable: reqUser.timesAvailable,
        shiftsScheduled: reqUser.shiftsScheduled
    })

    let save = newUser.save()
    save.then(function (user) {
        res.send('User has been saved')
    })
})



module.exports = router