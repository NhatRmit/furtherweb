const http = require('http')
const app = require('./app.js')
const server = http.createServer(app)

const {PORT} = process.env

const port = PORT || 8000

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})