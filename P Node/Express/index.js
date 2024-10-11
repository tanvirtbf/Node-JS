const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req,res)=>{
    const myUrl = url.parse(req.url, true)
    console.log(myUrl)

    if(myUrl.pathname === '/') {
        return res.end('Home Page')
    } else if(myUrl.pathname === '/about') {
        return res.end('About Page')
    } else if(myUrl.pathname === '/contact') {
        return res.end('Contact Page')
    } else {
        return res.end('404 Page Not Found!')
    }
    
})

const port = process.env.PORT || '3000'

server.listen(port, ()=>{
    console.log(`App Run With http://localhost:${port}`)
})