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
<<<<<<< HEAD
    fs.writeFile('user.txt',JSON.stringify(formObj))
=======
    const result = Number(formObj.first) + Number(formObj.second);
    console.log(result)
    fs.writeFileSync('user.txt',JSON.stringify(formObj))
>>>>>>> 6862e9844ab422409da2fa0134ada7e4d87e8edd
  })
  res.end()
}

module.exports = calculateResultPage