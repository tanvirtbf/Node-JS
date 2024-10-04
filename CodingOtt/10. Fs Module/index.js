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

  // fs.readFileSync
  // try {
  //   const data = fs.readFileSync('./static/hello.txt')
  //   res.write(data)
  //   return res.end()
  // } catch (error) {
  //   res.write('404 Not Found!')
  //   return res.end()
  // }

})

server.listen(3000)