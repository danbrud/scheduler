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