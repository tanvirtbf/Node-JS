const http = require('http')
const url = require('url')

const server = http.createServer((req,res)=>{

    res.writeHead(200, {
        'Access-Control-Allow-Origin' : 'http://127.0.0.1:5500'
    })
    res.write('hello')
    res.end()

})

server.listen(3000)