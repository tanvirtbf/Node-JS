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

  // fs.writeFile
  // fs.writeFile('./static/hii.txt','Hello World!', (err, data)=>{
  //   if(err){
  //     res.write('404 Error!')
  //     return res.end()
  //   } else{
  //     res.write('Successfully data submit')
  //     return res.end()
  //   }
  // })

  // fs.writeFileSync
  // try {
  //   fs.writeFileSync('./static/tanvir.txt', 'Hello, This is Tanvir')
  //   res.write('Success')
  //   return res.end()
  // } catch (error) {
  //   res.write('404 Error!')
  //   return res.end()
  // }

  // fs.appendFile
  fs.appendFile('./static/hii.txt', 'HIHIHIHIHIHI', (err,data)=>{
    if(err){
      res.write('Hello This is Error')
      return res.end()
    }else{
      res.write('Hi World!')
      return res.end()
    }
  })

})

server.listen(3000)