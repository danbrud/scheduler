const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../model/User')
const Scheduler = require('../Scheduler')

const getUsers = async () => User.find({})

const updateUserArray = async (arrayName, id, dateArray) => {
    const userId = id
    const dates = dateArray
    const user = await User.findOne({_id: userId})
    user[arrayName] = [...dates]
    user.save()
}


router.get('/sanity', function (req, res) {
    res.send('OK!')
})


router.get('/users', async function (req, res) {
    let users = await getUsers()
    res.send(users)
})

router.get('/user/:name', async function (req, res) {
    const userName = req.params.name
    let user = await User.findOne({name: userName})
    res.send(user)
})

router.get('/schedule/:month/:year', async function (req, res) {

    let year = req.params.year
    let month = req.params.month
    let daysToSchedule = [1 ,3]
    let usersPerShift = 2
    let users = await getUsers()

    const schedule = new Scheduler(year, month, daysToSchedule, usersPerShift, users)
    const generatedSchedule = schedule.createSchedule()
    // users.forEach(u => updateUserArray("shiftsScheduled", u._id, schedule.sendUserSchedule()))

    res.send(generatedSchedule)
})

router.post('/user', function (req, res) {
    const reqUser = req.body

    const newUser = new User({
        name: reqUser.name,
        contact: reqUser.contact,
        timesAvailable: [],
        shiftsScheduled: []
    })

    let save = newUser.save()
    save.then(function (user) {
        res.send('User has been saved')
    })
})

router.put('/user/available/:id', async function (req, res) {
    const userId = req.params.id
    const timesAvailable = req.body
    updateUserArray("timesAvailable", userId, timesAvailable)
    res.send(`${user.name}'s available times have been updated`)
})

router.put('/user/basic/:id', async function (req, res) {
    const userId = req.params.id
    const userData = req.body
    user = User.findOne({_id: userId})
    user.name = userData.name
    user.contact = userData.contact
    user.save()
    res.send(`${user.name}'s basic data has been updated`)
})


module.exports = router