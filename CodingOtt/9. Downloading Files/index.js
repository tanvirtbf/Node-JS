const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
  try {
    const pdfData = fs.readFileSync('./static/hello.pdf')
    res.writeHead(200, {'Content-Type':'application/pdf', 'Content-Disposition':'attachment; filename="demo.pdf"', 'Content-Length':pdfData.length})
    res.write(pdfData)
    res.end()
  } catch (error) {
    console.log(error)
  }
})

server.listen(3000)