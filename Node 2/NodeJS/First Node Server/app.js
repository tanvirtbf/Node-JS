// Creating my first Node Server

const http = require('http')

const server = http.createServer((req,res)=>{
  console.log(req)
})

const PORT = 3000

server.listen(PORT, ()=> {
  console.log(`Server Running at http://localhost:${PORT}`)
})
