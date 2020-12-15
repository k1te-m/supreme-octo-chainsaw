const db = require("../models");


module.exports = {
  sendMessage: function (req, res) {
    console.log(req.body)
    db.Message
      .create(req.body)
      .then((dbModel) => {
        res.json(dbModel);
        console.log("Message sent...");
      })
      .catch((error) => res.status(422).json(error));
  },
};