const express = require("express");
const { createUser } = require("../controllers/createUser.js");
const { getAllUsersApi } = require("../controllers/getAllUsersApi.js");
const { getAllUsers } = require("../controllers/getAllUsers.js");
const { findById } = require("../controllers/findById.js");
const { updateUserDetails } = require("../controllers/updateUserDetails.js");
const { deleteUser } = require("../controllers/deleteUser.js");

const router = express.Router();

router.get("", getAllUsersApi);
router.get("/html", getAllUsers);

// route
router.route("/:id").get(findById).patch(updateUserDetails).delete(deleteUser);

// router.get('/:id', findById)
// router.patch('/:id', updateUserDetails)
// router.delete('/:id', deleteUser)

router.post("/create", createUser);

module.exports = router;
