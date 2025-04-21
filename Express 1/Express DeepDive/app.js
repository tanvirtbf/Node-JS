// External Module
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.post('/contact-us', (req, res, next) => {
  console.log("Handling /contact-us for POST First Time", req.url, req.method, req.body);
  next();
})

app.use(bodyParser.urlencoded()) // this is used to parse the body and set it in req.body

app.post('/contact-us', (req, res, next) => {
  console.log("Handling /contact-us for POST Second Time", req.url, req.method, req.body);
  res.send(
    `<h1>Please give your details here</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter your name" />
      <input type="email" name="email" placeholder="Enter your Email" />
      <input type="Submit" />
    </form>
    `);
})

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(
    `<h1>Please give your details here</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter your name" />
      <input type="email" name="email" placeholder="Enter your Email" />
      <input type="Submit" />
    </form>
    `);
});

// app.post('/submit-details', (req, res, next) => {
//   console.log("Came in second Post middleware", req.url, req.method);
//   res.send("<p>Came from Second Post Middleware</p>");
// })


// app.post("/submit-details", (req, res, next) => {
//   console.log("Came in second middleware", req.url, req.method);
//   res.send("<p>Welcome to Complete Coding Nodejs series</p>");
// });

// app.use("/", (req, res, next) => {
//   console.log("Came in another middleware", req.url, req.method);
//   res.send("<p>Came from another Middleware</p>");
// });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});