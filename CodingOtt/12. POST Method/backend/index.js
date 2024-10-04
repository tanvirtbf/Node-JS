const http = require('http')
const url = require('url')

const server = http.createServer((req,res)=>{

    res.writeHead(200, {
        'Access-Control-Allow-Origin' : 'http://127.0.0.1:5500'
    })
    const data = JSON.stringify({
        username:'Tanvir',
        password:123
    })
    res.write(data)
    res.end()

})

server.listen(3000)