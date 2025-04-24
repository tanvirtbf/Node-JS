// External Module
const express = require('express');
const { getHome } = require('../controllers/home');

const userRouter = express.Router();


// Local Module

userRouter.get("/", getHome);

module.exports = userRouter;
