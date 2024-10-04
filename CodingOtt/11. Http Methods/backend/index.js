const http = require('http')

const server = http.createServer((req,res)=>{
    res.write('server')
    res.end()
})

server.listen(3000)