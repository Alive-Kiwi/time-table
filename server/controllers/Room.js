const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()


const Room = require('../models/Room')


router.get('/room', (req, res) => {
    Room.find().then(room => res.send(room))
})

router.post('/room', (req, res) => {
    console.log(req.body)
    const room = new Room({name: req.body.name})

    room.save().then(room => res.send(room))
})

router.put('/room/:id', (req, res) => {
    console.log('body',req.body)
})

router.delete('/room/:id', (req, res) => {
    console.log('body',req.body)
})


module.exports = {
    roomRouter: router
}
