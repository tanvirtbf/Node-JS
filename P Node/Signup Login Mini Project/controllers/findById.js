const { User } = require("../models/userModel");

async function findById(req, res) {
  const user = await User.findById(req.params.id);
  res.json({ user });
}

module.exports = {
  findById,
};
