const express = require('express')
const app = express()

// const hello = function(req, res, next) {
//     console.log('This is the fucking middleware')
//     next()
// }

// const bye = function(req, res, next) {
//     console.log('Get out of this hell')
//     next()
// }

// app.use(hello)
// app.use(bye)

// app.get('/', function(req, res) {
//     res.send('Get all student')
// })

// app.get('/students/id', function(req, res) {
//     res.send('Get 1 student')
// })

// app.post('/students', function(req, res) {
//     res.send('Post 1 student')
// })

// app.put('/students/id', function(req, res) {
//     res.send('Update 1 student')
// })

// app.delete('/students/id', function(req, res) {
//     res.send('Delete 1 student')
// })

// const birds = require('./router/birds.js')

// app.use('/birds', birds)

const studentRoute = require('./router/students.js')
const employeeRoute = require('./router/employees.js')

app.use('/students', studentRoute)
app.use('/employees', employeeRoute)

app.listen(3000)