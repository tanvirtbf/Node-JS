const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200, {
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5500'
    })
    console.log(req.url)
    const str = JSON.stringify({name:'Tanvir', age:25})
    res.write(str)
    res.end()
})

server.listen(3000)