var mongoose = require('mongoose')
var StudentSchema = new mongoose.Schema({
    name: String
})

var Student = mongoose.model('studentschema', StudentSchema)

export default Student