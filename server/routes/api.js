const express = require('express')
const request = require('request')
const router = express.Router()
const mongoose = require('mongoose')


router.get('/sanity', function (req, res) {
    res.send('OK!')
})




module.exports = router