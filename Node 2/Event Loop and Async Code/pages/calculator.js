const calculatorPage = (req,res)=>{
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
}

module.exports = calculatorPage
