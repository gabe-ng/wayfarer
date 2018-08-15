let db = require("../models");

// GET api/posts

const getPosts = (req, res) => {
    db.Post.find({}, (err, posts) => {
        if (err) return console.log(err);
        res.json(posts);
    })
}


module.exports = {
    show: getPosts,
}