const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req,res)=>{

  const parseUrl = url.parse(req.url , true)
  const fsPath = `./ui/${parseUrl.pathname==='/'? 'index':parseUrl.pathname.slice(1)}.html`
  const path = parseUrl.pathname
  const notFoundPath = './ui/not-found.html'
  console.log(fsPath)
  console.log(path)

  if(path === '/'){

    // Sync operation for read file
    // fs.readFile(fsPath, (err,data)=>{
    //   res.write(data)
    //   return res.end()
    // })

    // Async operation for read file
    try {
      const data = fs.readFileSync(fsPath)
      res.writeHead(200, {'Content-Type':'text/html'})
      res.write(data)
      return res.end()
    } catch (error) {
      const data = readFileSync(notFoundPath)
      res.write(data)
      return res.end()
    }

  }else if(path === '/login'){

    // Sync operation for read file
    // fs.readFile(fsPath, (err,data)=>{
    //   res.write(data)
    //   return res.end()
    // })

    // Async operation for read file
    const data = fs.readFileSync(fsPath)
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write(data)
    res.end()

  } else if(path === '/signup'){

    // Sync operation for read file
    // fs.readFile(fsPath, (err,data)=>{
    //   res.write(data)
    //   return res.end()
    // })

    // Async operation for read file
    const data = fs.readFileSync(fsPath)
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write(data)
    return res.end()

  }

})

server.listen(3000)
