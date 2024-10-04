const http = require('http')
const url = require('url')
const fs = require('fs')

const server = http.createServer((req,res)=>{

    res.writeHead(200, {
        'Access-Control-Allow-Origin' : 'http://127.0.0.1:5500'
    })

    const chunkBody = []
    req.on('data', (chunk)=>{
        chunkBody.push(chunk)
    })
    req.on('end',()=>{
        const totalData = Buffer.concat(chunkBody).toString()
        const mainData = JSON.parse(totalData)
        fs.writeFileSync(mainData.fileName, mainData.text)

        const resData = JSON.stringify(mainData)
        res.write(resData)

        res.end()

    })

})

server.listen(3000)