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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
