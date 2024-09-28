const http = require('http')

const server = http.createServer((req,res)=>{
  console.log(req.url)
  console.log(req.method)
  console.log(req.headers)
  process.exit()
})

const PORT = 3000

server.listen(PORT, ()=>{
  console.log(`Server running on address http://localhost:${PORT}`)
})










