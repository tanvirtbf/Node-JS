const http = require("http");
const fs = require("fs");

function createMyServer(req, res) {
  
}

const server = http.createServer(createMyServer);

server.listen(3001);
