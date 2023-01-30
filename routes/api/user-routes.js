const router = require("express").Router();

// Importing functions from the controllers into the routes - extra layer of decoupling routes and their matching functions
const {
  getUsers,
  getSingleUser,
  createUser,
} = require("../../controllers/userControllers");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser);

module.exports = router;
