// External Module
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const hostRouter = require('./routes/host');
const userRouter = require('./routes/user');


app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.get('/', (req, res, next) => {
  res.send(`Welcome to the home page!<br /> Please select a Home to view:<br />
    <a href="/add-home">Click here to add a home</a>
    `);
})




const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});