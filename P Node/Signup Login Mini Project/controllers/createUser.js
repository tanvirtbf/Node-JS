const { User } = require("../models/userModel.js");

async function createUser(req,res){
    const body = req.body;
    await User.create(body)
    res.json({message : 'Successfully Created a User!'})
}

module.exports = {
    createUser,
}