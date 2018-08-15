let db = require("./models");

let userList = [
  {
    name: "Gabriel Ng",
    username: "G-money",
    password: "gabe",
    joinDate: 08 - 15 - 2018,
    image: "None",
    posts: []
  }
];

let postList = [
  {
    title: "My first post!",
    body: "This is a great test post, don't you think?",
    city: "San Francisco",
    image: "None at the moment",
    username: "G-money",
  }
];

db.User.remove({}, (err, users) => {
  db.User.create(userList, (err, drinks) => {
    if (err) return console.log("ERROR", err);
    console.log("All users: ", users);
    console.log("Created ", users.length, "users");
  });
});

db.Post.remove({}, (err, posts) => {
  db.Post.create(postList, (err, posts) => {
    if (err) {
      return console.log("ERROR", err);
    }
    console.log("All users: ", posts);
    console.log("Created ", posts.length, "posts");
    process.exit();
  });
});
