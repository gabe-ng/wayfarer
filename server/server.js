// ************ SERVER JS **********

// Set up Express

const express = require("express");
const app = express();

// Set up Body Parser

// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(express.json());

// CORS

const cors = require("cors");

app.use(cors());

// Allow Express to access public files

app.use(express.static("public"));

// let db = require("./models");
let controllers = require("./controllers");

// ************* ROUTES ***********

// API Endpoints

app.get("/api/users/", controllers.user.show);
app.get("/api/user/:username", controllers.user.find);
app.get("/api/posts", controllers.post.showAll);
app.get("/api/posts/:city", controllers.post.find);



app.post("/api/user/login/", controllers.user.login);
app.post("/api/user/create", controllers.user.create);
app.post("/api/posts/create", controllers.post.create);

app.put("/api/user/update/:username", controllers.user.update);
app.put("/api/posts/update/:id", controllers.post.update);

app.delete("/api/posts/delete", controllers.post.delete);



// ************** SERVER ***********
let port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    
})