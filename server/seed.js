let db = require("./models");

let userList = [
  {
    name: "Gabriel Ng",
    username: "G1",
    password: "1",
    currentCity: "San Francisco",
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
  },
  {
    title: "My second post!",
    body: "This is a great test post, don't you think?",
    city: "Sydney",
    image: "None at the moment",
  },
  {
    title: "My second Sydney post!",
    body: "This is a great test post, don't you think?",
    city: "Sydney",
    image: "None at the moment",
  },
  {
    title: "My thirs post!",
    body: "This is a great test post, don't you think?",
    city: "Dubai",
    image: "None at the moment",
  },
  {
    title: "WOw",
    body: "This is a great test post, don't you think?",
    city: "San Francisco",
    image: "None at the moment",
  },
  {
    title: "hello posting",
    body: "This is a great test post, don't you think?",
    city: "London",
    image: "None at the moment",
  },
];

db.User.remove({}, (err, users) => {
  db.User.create(userList, (err, users) => {
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
    console.log("All posts: ", posts);
    console.log("Created ", posts.length, "posts");
    process.exit();
  });
});
