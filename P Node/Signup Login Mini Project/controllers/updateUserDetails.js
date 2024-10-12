const { User } = require("../models/userModel");

async function updateUserDetails(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "BOSS" });
  res.json({ message: "Successfully Updated!" });
}

module.exports = {
  updateUserDetails,
};
