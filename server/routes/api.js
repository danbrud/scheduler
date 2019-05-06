const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../model/User')


router.get('/sanity', function (req, res) {
    res.send('OK!')
})

router.get('/users', function(req, res) {
    User.find({}, function(err, users) {
        res.send(users)
    })
})

router.get('/schedule', function(req, res) {
    //Awesome code here that calls a method to create a schedule

    //res.send(schedule)
})

router.post('/user', function(req, res) {
    const reqUser = req.body

    const newUser = new User({
        name: reqUser.name,
        contact: reqUser.contact,
        timesAvailable: reqUser.timesAvailable,
        shiftsScheduled: reqUser.shiftsScheduled
    })

    let save = newUser.save()
    save.then(function(user) {
        res.send('User has been saved')
    })
})



module.exports = router