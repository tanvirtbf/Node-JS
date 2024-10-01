const homePage = ((req,res)=> {
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
})

module.exports = homePage