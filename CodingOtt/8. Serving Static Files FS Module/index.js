const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req,res)=>{

  const parseUrl = url.parse(req.url , true)
  const fsPath = `./ui/${parseUrl.pathname==='/'? 'index':parseUrl.pathname.slice(1)}.html`
  const path = parseUrl.pathname
  console.log(fsPath)
  console.log(path)
  if(path === '/'){
    fs.readFile(fsPath, (err,data)=>{
      res.write(data)
      return res.end()
    })
  }else if(path === '/login'){
    fs.readFile(fsPath, (err,data)=>{
      res.write(data)
      return res.end()
    })
  } else if(path === '/signup'){
    fs.readFile(fsPath, (err,data)=>{
      res.write(data)
      return res.end()
    })
  }

})

server.listen(3000)
