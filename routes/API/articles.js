const router = require("express").Router();
const booksController = require("../../controllers/booksController");

//Route
router.route("/")
  .get(articlesController.findAll)

//Need /api/saved routes

router.route("/api/saved")
  .get(articlesController.findById)
  .put(articlesController.update)


router.route("/api/saved/:id")
  .delete(articlesController.remove);
