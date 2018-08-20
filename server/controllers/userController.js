let db = require("../models");

// GET /api/users

const getUsers = (req, res) => {
  db.User.find()
    .populate("posts")
    .exec((err, users) => {
      if (err) return console.log(err);
      res.json(users);
    });
};

// GET /api/user/:username
const findUser = (req, res) => {
    db.User.findOne({ username: req.params.username })
        .populate("posts")
        .exec((err, foundUser) => {
            if (err) {
                console.log(err);
                return err;
            }
            console.log(req.params.username);
            
            console.log("user: ", foundUser);
            res.json(foundUser);
        })
}

// POST /api/user/login
const userLogin = (req, res) => {
  console.log("req", req.body);
  let username = req.body.username;
  let password = req.body.password;

  db.User.findOne(
    { username: username, password: password },
    (err, foundUser) => {
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

// POST /api/user/create
const createUser = (req, res) => {
    db.User.findOne({ username:req.body.username }, (err, foundUser) => {
        if (err) {
            console.log(err);
            return err;
        }
        if (foundUser) {
            res.status(400).send("user already exists");
        } else {
            let newUser = {
                name: req.body.name,
                username: req.body.username,
                password: req.body.password,
                currentCity: req.body.currentCity,
                image: req.body.image
            }

            db.User.create(newUser, (err, createdUser) => {
                console.log(createdUser);
                if (err) {
                    console.log(err);
                    return err;
                } else {
                    res.status(200).send("user successfully created");
                }
                
            })
        }
    })
}

// PUT /api/user/update/:username
const updateUser = (req, res) => {
    let update = req.body;
    db.User.findOneAndUpdate({ username:req.params.username }, update, { new: true})
        .populate("posts")
        .exec((err, user) => {
        if (err) {
            console.log(err);
            return err;
        }
        res.json(user)
    })
}

module.exports = {
  show: getUsers,
  find: findUser,
  login: userLogin,
  create: createUser,
  update: updateUser,
};
