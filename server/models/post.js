const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PostSchema = new Schema({
    title: String,
    body: String,
    city: String,
    image: String,
    dateCreated: { 
        type: Date, 
        default: Date.now
    },
    username: String,
})

let Post = mongoose.model("Post", PostSchema);

module.exports = Post;