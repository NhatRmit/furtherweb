const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {type: String},
    age: {type: Number, default: 0}
})

module.exports = mongoose.model('usercollection', userSchema)