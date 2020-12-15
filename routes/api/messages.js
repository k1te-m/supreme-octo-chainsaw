const router = require("express").Router();
const messagesController = require("../../controllers/messagesController");

router
    .route("/")
    .post(messagesController.sendMessage);

module.exports = router;