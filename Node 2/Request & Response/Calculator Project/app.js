const fs = require('fs')

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
      res.write(homePage)
      res.end()
    }else if(req.url === '/calculator'){
      res.write(form)
      res.end()
    }else if(req.url === '/calculator-data' && req.method === 'POST'){
      const body = []
      req.on('data',(chunk)=>{
        body.push(chunk)
      })
      req.on('end',()=>{
        const formObject = {}
        const fullBody = Buffer.concat(body).toString()
        const bodyObject = new URLSearchParams(fullBody)
        for(const [key,value] of bodyObject.entries()){
          formObject[key] = value
        }
        result = Number(formObject.firstNumber) + Number(formObject.lastNumber) 
        console.log(result)
        fs.writeFileSync('user.txt', JSON.stringify(formObject))
        res.write(`<h1>${result}</h1>`)
      })
      res.end()
    }

};

module.exports = requestServer;
