const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()


const Batch = require('../models/Batch')


router.get('/batch', (req, res) => {
    Batch.find().then(batches => res.send(batches))
})

router.post('/batch', (req, res) => {
    console.log(req.body)
    const batch = new Batch({name: req.body.name})

    batch.save().then(batch => res.send(batch))
})

router.put('/batch/:id', (req, res) => {
    console.log('body',req.body)
})

router.delete('/batch/:id', (req, res) => {
    console.log('body',req.body)
})


module.exports = {
    batchRouter: router
}
