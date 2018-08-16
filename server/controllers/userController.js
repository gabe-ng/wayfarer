let db = require("../models");

// GET /api/users

const getUsers = (req, res) => {
  db.User.find()
    .populate("posts", "title")
    .exec((err, users) => {
      if (err) return console.log(err);
      res.json(users);
    });
};

// POST /api/user/login
const userLogin = (req, res) => {
  console.log("req", req.body);
  let username = req.body.username;
  let password = req.body.password;

  db.User.findOne(
    { username: username, password: password },
    (err, foundUser) => {
      console.log("in findOne()");
      if (err) {
        console.log(err);
        return err;
      }
      if (foundUser) {
        res.status(200).send("success");
      } else {
        res.status(404).send("no found user");
      }
    }
  );
};

module.exports = {
  show: getUsers,
  login: userLogin
};
