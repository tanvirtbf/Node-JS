const requestServer = require('./app')

const http = require('http')

const server = http.createServer(requestServer)

const PORT = 3000
server.listen(PORT, ()=>{
  console.log(`Server Start with http://localhost:${PORT}`)
})