const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const studentRoute = require('./routes/students.js')

app.use(bodyParser.json())
app.use('/students', studentRoute)

const URL = 'mongodb+srv://Arthur:Arthur@cluster0.pibet.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(URL)

app.listen(3000)