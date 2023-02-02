const router = require("express").Router();

// Importing functions from the controllers into the routes - extra layer of decoupling routes and their matching functions
const {
  getSingleThought,
  getThoughts,
  createThought,
  updateThought,
  deleteThought,
  createReaction
} = require("../../controllers/thought-controllers");

router.route("/")
  .get(getThoughts)
  .post(createThought);

router.route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions")
  .post(createReaction);


module.exports = router;
