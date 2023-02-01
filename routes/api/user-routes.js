const router = require("express").Router();

// Importing functions from the controllers into the routes - extra layer of decoupling routes and their matching functions
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend
} = require("../../controllers/user-controllers");

// /api/users
router
  .route("/")
  .get(getUsers)
  .post(createUser);

// /api/users/:userId
router
  .route("/:userId")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router
  .route("/api/users/:userId/friends/:friendId")
  .post(addFriend);


module.exports = router;
