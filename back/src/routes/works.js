const Work = require('../models/workModel')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    const result = await Work.find({})
    res.send(result)
})

module.exports = router