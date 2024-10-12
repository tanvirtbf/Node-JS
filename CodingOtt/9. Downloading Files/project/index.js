const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req,res)=>{
<<<<<<< HEAD

  const parseUrl = url.parse(req.url, true)
  const queryStr = parseUrl.query.filename 
  const path = parseUrl.pathname 

  if(queryStr === 'hello1.pdf'){
    const data = fs.readFileSync(`/${queryStr}`)
    res.writeHead(200, {
      'Content-Type':'application/pdf',
      'Content-Disposition", "attachment; filename="" "'
    })
  }

  res.end()
})

server.listen(3000)








=======
    const parseUrl = url.parse(req.url, true)
    const query = parseUrl.query.filename
    
    function getContentType(filename){
        const arr = filename.split('.')
        const ext = arr[arr.length - 1]
        if(ext === 'pdf'){
            return `application/${ext}`
        } else if(ext === 'mp3') {
            return `application/${ext}`
        } else if(ext === 'mp4') {
            return `application/${ext}`
        }
    }

    
    try {
        if(query === 'hello1.pdf' || query === 'hello2.pdf' || query === 'hello3.pdf'){
            const data = fs.readFileSync(`./${query}`)
            res.writeHead(200, {'Content-Type':`application/${getContentType(query)}`, 'Content-Disposition':`attachment; filename="${query}"` , 'Content-Range':data.length})
            getContentType(query)
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

})

server.listen(3000)
>>>>>>> cbb35db56e6fa5b07081376896464afdd3a0e5c4
