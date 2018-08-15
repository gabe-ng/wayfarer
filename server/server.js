// ************ SERVER JS **********

// Set up Express

const express = require("express");
const app = express();

// Set up Body Parser

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// Allow Express to access public files

app.use(express.static("public"));

// let db = require("./models");
let controllers = require("./controllers");

// ************* ROUTES ***********

// API Endpoints

app.get("/api/users/", controllers.user.show);
app.get("/api/posts", controllers.post.show);



// ************** SERVER ***********
let port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    
})