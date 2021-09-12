const mongoose = require('mongoose')

const { MONGO_URI } = process.env
const URI = MONGO_URI

exports.connect = () => {
    mongoose
        .connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        .then(() => {
            console.log('Successfully connected to database')
        })
        .catch((error) => {
            console.log('Failed to connect to database')
            console.error(error)
            process.exit(1)
        })
}