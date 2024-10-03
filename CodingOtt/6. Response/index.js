const http = require('http') 

const server = http.createServer((req,res)=>{
  console.log(req.url)

  // res.setHeader('Content-Type','text/plain')
  res.writeHead(200, {'Content-Type':'text/plain'})
  res.write('<h1>Hello World</h1>')

  res.end()
})

server.listen(3000)

