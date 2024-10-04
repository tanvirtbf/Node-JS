const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{

  // fs.readFile
  // const data = fs.readFile('./static/hello.txt', (err,data)=>{
  //   if(err){
  //     res.write('File Error!')
  //     return res.end()
  //   }else {
  //     res.write(data)
  //     return res.end()
  //   }
  // })

})

server.listen(3000)