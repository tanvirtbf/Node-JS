
const sumRequestHandler = require('./sum');

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
        <form action="/calculator-data" method="POST">
          <input type="number" name="firstNumber" placeholder="type a number">
          <input type="number" name="lastNumber" placeholder="type a number">
          <button>Sum</button>
        </form>
      </body>
    </html>
    `;

    let result ;

    if(req.url === '/'){
      res.setHeader('Content-Type','text/html')
      res.write(homePage)
      res.end()
    }else if(req.url === '/calculator'){
      res.setHeader('Content-Type','text/html')
      res.write(form)
      res.end()
    }else if(req.url === '/calculator-data' && req.method === 'POST'){
      sumRequestHandler(req,res)
    }

};

module.exports = requestServer;
