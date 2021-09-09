var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.send('Get all students')
})

router.get('/id', function(req, res) {
    res.send('Get 1 student')
})

router.post('/', function(req, res) {
    res.send('Post 1 student')
})

router.patch('/id', function(req, res) {
    res.send('Update 1 student')
})

router.delete('/id', function(req, res) {
    res.send('Delete 1 student')
})

module.exports = router