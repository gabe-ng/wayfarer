let db = require("../models");

// GET api/posts

const getAllPosts = (req, res) => {
    db.Post.find({}, (err, posts) => {
        if (err) {
            console.log(err)
            return err;
        };
        res.json(posts);
    })
}

// GET  api/posts/:city
const getCityPosts = (req, res) => {
    db.Post.find({ city: req.params.city }, (err, posts) => {
        if (err) {
            console.log(err)
            return err;
        };
        res.json(posts);
    })
}


module.exports = {
    showAll: getAllPosts,
    find: getCityPosts,
    
}