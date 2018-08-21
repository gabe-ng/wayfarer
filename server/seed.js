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
    title: "Uhh..",
    body:
      "Uh I don't think we should Natasha. Hold on a sec, I think I dropped my wallet by our jet. I'll brb...",
    city: "Sydney",
    image: "None at the moment",
    username: "Bruce Banner"
  },
  {
    title: "Nice getaway",
    body:
      "This opera building is beautiful. I have an extra ticket, whaddaya say @Bruce?",
    city: "Sydney",
    image: "None at the moment",
    username: "Black Widow"
  },
  {
    title: "WAKANDA FOREVA",
    body:
      "Wakanda must open trade with these people and I will construct my new summer home here.",
    city: "Dubai",
    image: "None at the moment",
    username: "Black Panther"
  },
  {
    title: "Eh",
    body: "America is better.",
    city: "Dubai",
    image: "None at the moment",
    username: "Captain America"
  },
  {
    title: "Too many cars on this bridge.",
    body:
      "The traffic on this bridge is too much. It will eventually collapse from the ever growing car population. I will use the infinity stones to wipe out half the automobiles in San Francisco.",
    city: "San Francisco",
    image: "None at the moment",
    username: "Thanos"
  },
  {
    title: "Should we intervene?",
    body: "Hey Avengers... I kind of agree with Thanos. SF Traffic sucks.",
    city: "San Francisco",
    image: "None at the moment",
    username: "Iron Man"
  },
  {
    title: "No Groot",
    body: "No Groot, you cannot play video games in the palace.",
    city: "London",
    image: "None at the moment",
    username: "Rocket"
  },
  {
    title: "I am Groot",
    body: "I am Groot, I am Groot? I am Groot",
    city: "London",
    image: "None at the moment",
    username: "Groot"
  },
  {
    title: "Not Funny",
    body: "Not funny Wade. Do not mock my motherland.",
    city: "Moscow",
    image: "None at the moment",
    username: "Colossus"
  },
  {
    title: "Colossus",
    body:
      "*In Russian accent* Oh, this is my hometown. I love the shishkabobs.",
    city: "Moscow",
    image: "None at the moment",
    username: "Deadpool"
  }
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
