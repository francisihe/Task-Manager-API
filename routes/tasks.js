const express = require('express')
const router = express.Router()

/* --- Import Controllers */


router.route('/')
    .get((req, res) => {
        res.send('Tasks: get all tasks')
    })


module.exports = router