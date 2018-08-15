const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PostSchema = new Schema({
    title: String,
    body: String,
    city: String,
    image: String,
    user: String
})

let Post = mongoose.model("Post", PostSchema);

module.exports = Post;