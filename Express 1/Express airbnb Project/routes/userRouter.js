const express = require("express");

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.send(`Welcome to the home page!<br /> Please select a Home to view:<br />
      <a href="/host/add-home">Click here to add a home</a>
      `);
});

module.exports = userRouter;