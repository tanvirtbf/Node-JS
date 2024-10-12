const { User } = require("../models/userModel");

async function deleteUser(req, res) {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Successfully Deleted!" });
}

module.exports = {
  deleteUser,
};
