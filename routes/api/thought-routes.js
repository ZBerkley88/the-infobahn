const router = require("express").Router();

// Importing functions from the controllers into the routes - extra layer of decoupling routes and their matching functions
const {
  getSingleThought,
  getThoughts,
  createThought,
} = require("../../controllers/thought-controllers");

router.route("/").get(getThoughts).post(createThought);

router.route("/:postId").get(getSingleThought);

module.exports = router;
