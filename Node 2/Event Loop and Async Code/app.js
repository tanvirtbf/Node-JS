const fs = require('fs')

const requestServer = (req,res) => {
  
  if(req.url === '/'){
    res.setHeader('Content-Type','text/html')
    res.write(`
    <html>
      <head>
        <title>Home Page</title>
      </head>
      <body>
        <h1>Home Page</h1>
        <a href="/calculator">Calculator</a>
      </body>
    </html>
    `)
    res.end()
  } else if(req.url.toLowerCase() === '/calculator'){
    res.setHeader('Content-Type','text/html')
    res.write(`
    <html>
      <head>
        <title>Home Page</title>
      </head>
      <body>
        <h1>Calculator</h1>
        <form action="/calculate-result" method="POST">
          <input type="text" name="first" placeholder="first number" >
          <input type="text" name="second" placeholder="first number" >
          <input type="submit" value="ADD">
        </form>
      </body>
    </html>
    `)
    res.end()
  } else if(req.url.toLowerCase() === '/calculate-result' && req.method === 'POST'){
    const body = []

    req.on('data',(chunk)=>{
      body.push(chunk)
    })

    req.on('end',()=>{
      const formObj = {}
      const fullBody = Buffer.concat(body).toString()
      const params = new URLSearchParams(fullBody)
      for(const [key,value] of params.entries()){
        formObj[key] = value
      }
      fs.writeFileSync('user.txt',JSON.stringify(formObj))
    })

    res.end()
  }
}

module.exports = requestServer;