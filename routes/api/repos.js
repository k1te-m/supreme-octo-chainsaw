const router = require("express").Router();
const repoController = require("../../controllers/reposController");


// connects to /api/portfolio
router
    .route("/")
    .get(repoController.findAll);

module.exports = router;