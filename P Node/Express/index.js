const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req,res)=>{
    const myUrl = url.parse(req.url, true)
    console.log(myUrl)
    res.end('Hello World!')
})

const port = process.env.PORT || '3000'

server.listen(port, ()=>{
    console.log(`App Run With http://localhost:${port}`)
})