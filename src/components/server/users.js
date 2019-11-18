const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    username:{
        type: String
    },
    password:{
        type: String
    }
})
const users = mongoose.model('users', Userschema);
module.exports = users;