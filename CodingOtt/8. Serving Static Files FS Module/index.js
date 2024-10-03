const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{

  fs.readFile('./ui/index.html', (error,data)=>{
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write(data.toString())
    res.end()
  })

})

server.listen(3000)
