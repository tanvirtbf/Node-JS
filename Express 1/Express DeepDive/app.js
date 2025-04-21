// External Module
const express = require('express');

const app = express();

// use middleware testing
// app.use('/', (req, res, next) => {
//   console.log("Came in first middleware", req.url, req.method);
//   next();
// })
// app.use('/submit-details', (req, res, next) => {
//   console.log("Came in Hello World! middleware", req.url, req.method);
//   next();
// })
// app.use('/submit-details/hello', (req, res, next) => {
//   console.log("Came in second middleware", req.url, req.method);
//   next();
// })
// app.use('/submit-details/hello', (req, res, next) => {
//   console.log("Came in third middleware", req.url, req.method);
//   next();
// })
// app.use('/submit-details/hello', (req, res, next) => {
//   console.log("Came in second middleware", req.url, req.method);
//   res.send("<p>Welcome to Complete Coding Nodejs series</p>");
// })

// app.get("/", (req, res, next) => {
//   console.log("Came in first middleware", req.url, req.method);
//   //res.send("<p>Came from First Middleware</p>");
//   next();
// });

// Method Middleware Testing
// app.get('/', (req, res, next) => {
//   console.log("Came in first Get middleware", req.url, req.method);
//   next();
// })

// app.get('/', (req, res, next) => {
//   console.log("Came in Second Get middleware", req.url, req.method);
//   res.send("<p>Came from Second Middleware</p>");
// })

// app.get('/hello', (req, res, next) => {
//   console.log("Came in first Hello middleware", req.url, req.method);
//   next();
// })

// app.get('/hello', (req, res, next) => {
//   console.log("Came in second Hello middleware", req.url, req.method);
//   res.send("<p>Came from Second Hello Middleware</p>");
// })

// app.post('/submit-details', (req, res, next) => {
//   console.log("Came in first Post middleware", req.url, req.method);
//   next();
// })

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