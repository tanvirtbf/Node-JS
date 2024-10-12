const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req,res)=>{

  const parseUrl = url.parse(req.url, true)
  const queryStr = parseUrl.query.filename 
  const path = parseUrl.pathname 

  if(queryStr === 'hello1.pdf'){
    const data = fs.readFileSync(`/${queryStr}`)
    res.writeHead(200, {
      'Content-Type':'application/pdf',
      'Content-Disposition", "attachment; filename="" "'
    })
  }

  res.end()
})

server.listen(3000)








