const http = require('http')

const server = http.createServer((req,res)=>{
  console.log(req.url)
  res.end()
})

const PORT = 3000
server.listen(PORT, ()=>{
  console.log(`Server Start with http://localhost:${PORT}`)
})