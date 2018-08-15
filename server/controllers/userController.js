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





module.exports = {
    show: getUsers,
}


