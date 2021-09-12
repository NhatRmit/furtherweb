require('dotenv').config()
require('./config/database.js').connect()
const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const productsRoute = require('./routes/productRouter.js')

app.use('/', productsRoute)

module.exports = app