const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()


const Teacher = require('../models/Teacher')


router.get('/teacher', (req, res) => {
    Teacher.find().then(teachers => res.send(teachers))
})

router.post('/teacher', (req, res) => {
    console.log(req.body)
    const teacher = new Teacher({name: req.body.name})

    teacher.save().then(teacher => res.send(teacher))
})

router.put('/teacher/:id', (req, res) => {
    console.log('body',req.body)
})

router.delete('/teacher/:id', (req, res) => {
    console.log('body',req.body)
})


module.exports = {
    teacherRouter: router
}
