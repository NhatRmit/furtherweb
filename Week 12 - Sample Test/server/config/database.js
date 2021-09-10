const mongoose = require('mongoose')

const {URI} = process.env

exports.connect = () => {
    mongoose
        .connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Successfully connect to database')
        })
        .catch((error) => {
            console.log('Failed to connect to database')
            console.error(error)
            process.exit(1)
        })
}