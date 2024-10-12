const http = require('http')
const fs = require('fs')
const url = require('url')

const myServer = http.createServer((req,res)=>{
    if(req.url === '/favicon.ico') return res.end()
    console.log('New Request Recieve')
    const log = `${Date.now()} : ${req.url} New Request Received\n`
    const myUrl = url.parse(req.url, true)
    console.log(myUrl)
    console.log(myUrl.pathname)
    console.log(myUrl.query)
    console.log(myUrl.query.myname)
    fs.appendFile('./log.txt', log , (err,data)=>{
        if(req.url === '/') res.end('Home Page')
        else if(myUrl.pathname === '/about') res.end(`Hi ${myUrl.query.myname}`)
        else if(req.url === '/contact') res.end('Contact Page')
        else res.end('404 Page Not Found!')
    })
})

myServer.listen(3000, ()=>{
    console.log(`Server Run With : http://localhost:3000`)
})

