const http = require('http')

const server = http.createServer((req,res)=>{
  console.log(req.url)
  console.log(req.method)
  console.log(req.headers)

  // res.setHeader('Content-Type','json')
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>Complete Coding</title></head>')
  res.write('<body><h1>Hello, I am Tanvir</h1></body>')
  res.write('</html>')
  res.end()

})

const PORT = 3000

server.listen(PORT, ()=>{
  console.log(`Server running on address http://localhost:${PORT}`)
})










