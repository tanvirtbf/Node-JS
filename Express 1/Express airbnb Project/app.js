// External Module
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const hostRouter = require('./routes/host');
const userRouter = require('./routes/user');

app.use((req, res, next) => {
  console.log(req.url, req.method);
  res.send("<h1>Welcome to AirBnb Server</h1>");
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});