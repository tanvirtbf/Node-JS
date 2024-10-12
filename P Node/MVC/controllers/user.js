const User = require("../models/user")


async function getUser(req,res){
  const allUsers = await User.find()
  res.json(allUsers)
}

async function getUserHtml(req,res){
  const allUsers = await User.find()
  const html = `
    <ul>
      ${allUsers.map((user)=> `<li>${user.firstName}</li>`)}
    </ul>
  `
  res.send(html)
}

async function createUser(req,res){
  const body = req.body

  if(!body || !body.firstName || !body.lastName || !body.email || !body.age || !body.gender || !body.address) {
    res.status(400).json({ message : 'All Data have not received!'})
  }

  await User.create(body)

  res.status(201).json({ message : 'Success'})
}

async function updateUser(req,res){
  await User.findByIdAndUpdate(req.params.id, {lastName : 'Boss'})
  res.json({ message : 'Successfully Update'})
}

async function deleteUser(req,res){
  await User.findByIdAndDelete(req.params.id)
  res.json({ message : 'Successfully Deleted!'})
}

module.exports = {
  getUser,
  getUserHtml,
  createUser,
  updateUser,
  deleteUser
}