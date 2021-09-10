require('dotenv').config()
require('./config/database.js').connect()
const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const user = require('./router/user.js')
const authentication = require("./middleware/auth.js")

app.use('/', user)

app.get("/welcome", authentication, (req, res) => {
  res.status(200).send("Welcome 🙌")
})

module.exports = app