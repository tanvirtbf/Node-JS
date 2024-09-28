// Creating my first Node Server

const http = require('http')

function requestListener(req,res){
  console.log(req)
}

http.createServer(requestListener)
