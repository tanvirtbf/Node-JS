const http = require('http')
const url = require('url')

const server = http.createServer((req,res)=>{

  const parseUrl = url.parse(req.url, true)
  
  res.write(`<h1>Name : ${parseUrl.query.name}</h1>`)
  res.write(`<h1>Age : ${parseUrl.query.age}</h1>`)

  res.end()
})

server.listen(3000)
