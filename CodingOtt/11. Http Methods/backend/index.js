const http = require('http')
const url = require('url')

const server = http.createServer((req,res)=>{
    res.writeHead(200, {
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5500'
    })
    const parseUrl = url.parse(req.url, true)
    const username = parseUrl.query.username 
    const password = parseUrl.query.password 
    const str = JSON.stringify({username:username, password:password})
    res.write(str)
    res.end()
})

server.listen(3000)