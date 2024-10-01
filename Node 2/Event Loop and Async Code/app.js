
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
      </body>
    </html>
    `)
    res.end()
  }
}

module.exports = requestServer;