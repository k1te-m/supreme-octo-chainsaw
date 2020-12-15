const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Repo.find({})
      .then((repos) => res.json(repos))
      .catch((error) => res.status(422).json(error));
  },
};