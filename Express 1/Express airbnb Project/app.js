// External Module
const express = require("express");
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter"); // this is used to import the router

const app = express();

app.use(express.urlencoded({ extended: false })); // this is used to parse the body and set it in req.

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(userRouter); // this is used to mount the router on the app

app.use(hostRouter); // this is used to mount the router on the app

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
}); // this is used to handle the error . Because this is the last middleware, it will be executed if no other middleware is executed before this. I mean no other middleware cannot send response before this. So this is the last middleware and this is send the response.

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
