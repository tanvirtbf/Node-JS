const mongoose = require('mongoose')
const { User } = require('../models/userModel.js')

async function getAllUsersApi(req,res){
    const alluser = await User.find()
    res.json(alluser)
}

module.exports = {
    getAllUsersApi,
}
