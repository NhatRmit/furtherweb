var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.send('Get all employees')
})

router.get('/id', function(req, res) {
    res.send('Get 1 employee')
})

router.post('/', function(req, res) {
    res.send('Post 1 employee')
})

router.patch('/id', function(req, res) {
    res.send('Update 1 employee')
})

router.delete('/id', function(req, res) {
    res.send('Delete 1 employee')
})

module.exports = router