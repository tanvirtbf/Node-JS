const { User } = require("../models/userModel.js")

async function getAllUsers(req,res){
    const allUsers = await User.find()
    const html = `
        <ul>
            ${allUsers.map((user)=> `<li>FirstName : ${user.firstName} LastName : ${user.lastName}</li>`)}
        </ul>
    `

    res.send(html)
}

module.exports = {
    getAllUsers,
}