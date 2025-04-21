const express = require("express");

const hostRouter = express.Router();

hostRouter.post("/add-home", (req, res, next) => {
  res.send(`<p>Details submitted successfully!</p>
      <br /> Name: ${req.body.name}<br /> Email: ${req.body.email}
      <br /><a href="/">Go back to home</a>);
      `);
});

hostRouter.get("/add-home", (req, res, next) => {
  res.send(`<h1>Please give your details here</h1>
      <form action="/host/add-home" method="POST">
        <input type="text" name="name" placeholder="Enter your name" />
        <input type="email" name="email" placeholder="Enter your Email" />
        <input type="Submit" />
      </form>`);
});

module.exports = hostRouter;
