const http = require('http')
const fs = require('fs')

const myServer = http.createServer((req,res)=>{
    console.log('New Request Recieve')
    const log = `${Date.now()} : ${req.url} New Request Received\n`
    fs.appendFile('./log.txt', log , (err,data)=>{
        switch(req.url){
            case '/' : 
                res.end('Home Page');
                break;
            case '/about' : 
                res.end('About Page');
                break;
            case '/contact' : 
                res.end('Contact Page');
                break;
            case '/service' : 
                res.end('Service Page');
                break;
            default : 
                res.end('404 Not Found!')
        }
        res.end('Hello From Server!')
    })
})

myServer.listen(3000, ()=>{
    console.log(`Server Run With http://localhost:3000`)
})
