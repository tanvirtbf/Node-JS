const http = require("http");
const requestServer = require("./app");

const server = http.createServer(requestServer);

server.listen(3001);
