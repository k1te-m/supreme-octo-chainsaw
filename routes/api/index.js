const router = require("express").Router();
const portfolioRoutes = require("./repos");
const messageRoutes = require("./messages");

// api routes
router.use("/repos", portfolioRoutes);
router.use("/messages", messageRoutes);

module.exports = router;