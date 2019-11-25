const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()


const Subject = require('../models/Subject')


router.get('/subject', (req, res) => {
    Subject.find().then(subjects => res.send(subjects))
})

router.post('/subject', (req, res) => {
    console.log(req.body)
    const subject = new Subject({name: req.body.name})

    subject.save().then(subject => res.send(subject))
})

router.put('/subject/:id', (req, res) => {
    console.log('body',req.body)
})

router.delete('/subject/:id', (req, res) => {
    console.log('body',req.body)
})


module.exports = {
    subjectRouter: router
}
