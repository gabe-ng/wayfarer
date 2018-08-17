const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: String,
    username: String,
    password: String,
    currentCity: String,
    joinDate: { 
        type: Date, 
        default: Date.now
    },
    image: String,
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
})

let User = mongoose.model("User", UserSchema)

module.exports = User;