const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const repoSchema = new Schema({
    name: {type: String},
    github: {type: String},
    deployedLink: { type: String },
    imageURL: {type: String},
    description: {type: String},
    languages: [String],
})

const Repo = mongoose.model("Repo", repoSchema);

module.exports = Repo;