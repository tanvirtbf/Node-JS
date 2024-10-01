const requestServer = (req, res) => {

  console.log(req.url);
  const homePage = `
    <html>
      <head>
        <title>Document</title>
      </head>
      <body>
        <h1>Welcome Our Website</h1>
        <a href="/calculator">Calculator</a>
      </body>
    </html>
    `;
  const form = `
    <html>
      <head>
        <title>Document</title>
      </head>
      <body>
        <form action="">
          <input type="number" placeholder="type a number">
          <input type="number" placeholder="type a number">
          <button>Sum</button>
        </form>
      </body>
    </html>
    `;

    if(req.url === '/'){
      res.write(homePage)
      res.end()
    }else if(req.url === '/calculator'){
      res.write(form)
      res.end()
    }

};

module.exports = requestServer;
