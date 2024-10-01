const fs = require('fs')

const calculateResultPage = (req,res) => {
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

module.exports = calculateResultPage