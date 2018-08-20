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

// POST api/posts/create
const createPost = (req, res) => {
    let newPost = {
        title: req.body.title,
        body: req.body.body,
        city: req.body.city,
    }
    db.Post.create(newPost, (err, createdPost) => {
        console.log(createdPost);
        if (err) {
            console.log(err);
            return err;
        } else {
            db.User.findOne({ username: req.body.username }, (err, foundUser) => {
                if (err) {
                    console.log(err);
                    return err;
                } else {
                    foundUser.posts.push(createdPost);
                }
            })
            res.status(200).send("post successfully created");
        }
    })
}


module.exports = {
    showAll: getAllPosts,
    find: getCityPosts,
    create: createPost,
}