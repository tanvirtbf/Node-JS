
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
    res.statusCode = 302
    res.setHeader('Location','/')
    console.log('hiii')
    res.end()
  }
}

module.exports = requestServer;