let db = require("../models");

// GET /api/users

const getUsers = (req, res) => {
    db.User.find()
        .populate("posts", "title")
        .exec((err, users) => {
            if (err) return console.log(err);
            res.json(users);
        })
}

// POST /api/user/login
const userLogin= (req, res) => {
    let username = req.params.username;
    let password = req.params.password
    console.log(username);
    db.User.findOne({ username: username, password: password }, (err, foundUser) => {
        if (err) return console.log(err);
        res.status(200);
    })
    
}





module.exports = {
    show: getUsers,
    login: userLogin,
}


