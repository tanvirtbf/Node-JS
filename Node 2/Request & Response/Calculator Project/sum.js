const fs = require('fs');

const sumRequestHandler = (req,res) => {
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
    res.setHeader('Content-Type','text/html')
    res.write(`    <html>
      <head>
        <title>Document</title>
      </head>
      <body>
        <h1>Your Sum is ${result}</h1>
      </body>
    </html>`)
    res.end()
  })
}

module.exports = sumRequestHandler