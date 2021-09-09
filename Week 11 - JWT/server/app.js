require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())

const authentication = require("./middleware/auth.js");

const userRoute = require("./routes/user.js")
app.use('/', userRoute)

app.get("/welcome", authentication, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

module.exports = app