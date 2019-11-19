const mongoose = require('mongoose')

let postschema = new mongoose.Schema({
    user: {type : String},
    post: {type: String},
    likes: {type: Number},
    dislikes: {type: Number}
});

const Posts = mongoose.model('Posts', postschema);
module.exports = Posts;