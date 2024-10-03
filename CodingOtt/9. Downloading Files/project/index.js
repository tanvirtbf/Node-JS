const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req,res)=>{
    const parseUrl = url.parse(req.url, true)
    const query = parseUrl.query.filename
    console.log(query)
    
    try {
        if(query === 'hello1.pdf' || query === 'hello2.pdf' || query === 'hello3.pdf'){
            const data = fs.readFileSync(`./${query}`)
            res.writeHead(200, {'Content-Type':'application/pdf', 'Content-Disposition':`attachment; filename="${query}"` , 'Content-Range':data.length})
            res.write(data)
            return res.end()
        }else {
            res.setHeader('Content-Type','text/html')
            res.write('<h1>Please Select Right Pdf name!</h1>')
            return res.end()
        }
    } catch (error) {
        res.setHeader('Content-Type','text/html')
        res.write('<h1>Something Went Wrong!</h1>')
        return res.end()
    }

    res.end()
})

server.listen(3000)
