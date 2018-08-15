const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGOD_URI || "mongodb://localhost:27017/wayfarer",
  { useNewUrlParser: true }
);

let User = require("./user.js");
let Post = require("./Post.js");

module.exports = {
    User: User,
    Post: Post,
}